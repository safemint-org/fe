import ImageCommon from '@/assets/common';
import ReactPreview from '@/components/ReactPreview';
import ImageUploader from '@/components/RightContent/ImageUploader';
import ConnectButton from "@/components/ConnectButton";
import type { ProjectInfo } from '@/helpers/types';
import { SafeMint__factory } from '@/typechain/factories/SafeMint__factory';
import { ERC20__factory } from "@/typechain/factories/ERC20__factory";
import { uploadProjectMetadata } from '@/utils/ipfs';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from "fortmatic";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { NETWORKS } from "@/constants/networks"
import {
  ProFormDateTimePicker,
  ProFormDependency,
  ProFormGroup,
  ProFormList,
  ProFormSelect,
  ProFormSwitch,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from '@ant-design/pro-form';
import type { FormInstance } from 'antd';
import { Button, Card, Col, Descriptions, Form, Input, message, Row, Statistic } from 'antd';
import { ethers } from 'ethers';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { request, useModel } from 'umi';
import type { StepDataType } from './data';
import styles from './submit.less';
import { useHistory } from 'react-router-dom'

export type ProjectInfoFormFields = {
  name: string;
  description: string;
  infoUri: string;
  logoUri: string;
  twitter: string;
  discord: string;
  payButton: string;
  payDisclosure: string;
  version: number;
};

const StepDescriptions: React.FC<{
  stepData: StepDataType;
  bordered?: boolean;
}> = ({ stepData, bordered }) => {
  const { payAccount, receiverAccount, receiverName, amount } = stepData;
  return (
    <Descriptions column={1} bordered={bordered}>
      <Descriptions.Item label="付款账户"> {payAccount}</Descriptions.Item>
      <Descriptions.Item label="收款账户"> {receiverAccount}</Descriptions.Item>
      <Descriptions.Item label="收款人姓名"> {receiverName}</Descriptions.Item>
      <Descriptions.Item label="转账金额">
        <Statistic
          value={amount}
          suffix={
            <span
              style={{
                fontSize: 14,
              }}
            >
              元
            </span>
          }
          precision={2}
        />
      </Descriptions.Item>
    </Descriptions>
  );
};

const submit: React.FC = () => {
  let isSave = history?.location.isSave ?? false;
  const storageData = localStorage.getItem('safe-mint-dao');
  const { connection, setconnection } = useModel('useWeb3Model', (model) => ({
    connection: model.connection,
    setconnection: model.setconnection
  }));
  //const ABIFunctionArray: any[] = []
  const [ABIarry, setABIarry] = useState([]);
  const [getIpfsHash, setIpfsHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [paramsArray, setparamsArray] = useState([]);
  const TESTNET_API_URL_MAP = {
    Ethereum: 'https://api-rinkeby.etherscan.io',
    Moonbeam: 'https://api-moonbeam.moonscan.io',
  };
  // Example for Polygon/Matic:
  const customNetworkOptions = {
    rpcUrl: 'https://rpc-mainnet.maticvigil.com',
    chainId: 137
  }
  const getProviderOptions = () => {
    return {
      /* See Provider Options Section */
      walletconnect: {
        display: {
          name: "WalletConnect"
        },
        package: WalletConnectProvider,
        options: {
          infuraId: "INFURA_ID" // required
        }
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "FORTMATIC_KEY", // required
          network: customNetworkOptions // if we don't pass it, it will default to localhost:8454
        }
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK, // Required
        options: {
          appName: "My Awesome App", // Required
          infuraId: "INFURA_ID", // Required
          rpc: "", // Optional if `infuraId` is provided; otherwise it's required
          chainId: 1, // Optional. It defaults to 1 if not provided
          darkMode: false // Optional. Use dark theme, defaults to false
        }
      },
    };
  }
  const onLoade = async () => {

    const getNetwork = (id) => NETWORKS[id].name
    const web3Modal = new Web3Modal({
      network: getNetwork(connection.chainId),
      cacheProvider: true,
      providerOptions: getProviderOptions()
    });

    const instance = web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(await instance);
    // MetaMask 需要请求权限才能连接用户帐户
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const accounts = await provider.listAccounts();
    const { chainId } = await provider.getNetwork();
    const address = accounts[0];
    await setconnection({
      instance,
      connected: true,
      address,
      chainId,
      signer
    });
  }

  const history = useHistory()
  const [stepData, setStepData] = useState<ProjectInfo>(
    storageData
      ? JSON.parse(storageData)
      : {
        logol: '',
        banner: '',
        name: '',
        description: '',
        chain: '',
        address: '',
        website: '',
        twitter: '',
        discord: '',
        telegram: '',
        supply: '',
        peraddress: '',
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
        refundable: false,
        functions: [{
          "name": "",
          "free": false,
          "price": "",
          "param": "",
          "description": "",
          "whitelister": false,
          "paramsArray": [],
        }],
        current: 0,
      },
  );

  const getABI = async () => {
    const url = TESTNET_API_URL_MAP[stepData.chain]
    return await request(
      `${url}/api?module=contract&action=getabi&address=${stepData.address}&tag=latest&apikey=VXZEU1KW4YIXY8ZHQZG4QJTPK3CH7M6B3X`,
    );
  }
  const saveCurrent = (cur) => {
    setCurrent(cur);
    setStepData((obj) => {
      return { ...obj, current: cur };
    });
  }
  const currentChange = async (cur: React.SetStateAction<number>) => {
    if (cur == 1) {
      setLoading(true);
      // const data = await request(
      //   `https://api-moonbeam.moonscan.io/api?module=contract&action=getabi&address=${stepData.address}&apikey=YourApiKeyToken`,
      // );
      const data = await getABI()
      if (data.message !== 'OK') {
        message.error('调用合约失败，请检查合约地址');
        setLoading(false);
        return false;
      }
      message.success('合约获取成功');
      const abi = JSON.parse(data?.result);
      const array = [];
      for (const i in abi) {
        if (abi[i].type == 'function' && abi[i].stateMutability.includes('payable')) {
          const func = abi[i];
          const paramsArray = [];
          for (const j in func.inputs) {
            func.inputs[j].internalType?.indexOf('int') && paramsArray.push(func.inputs[j].name);
          }
          array.push({ label: func.name, value: func.name, params: paramsArray });
        }
      }
      setABIarry(array);
      setLoading(false);
    }
    if (cur == 2) {
      setLoading(true);
      console.log('hhhhhhh')
      const { IpfsHash } = await uploadProjectMetadata(stepData);
      if (!IpfsHash) {
        message.error('上传失败');
        setLoading(false);
        return false;
      }
      setIpfsHash(IpfsHash);
      setLoading(false);
    }
    setCurrent(cur);
    setStepData((obj) => {
      return { ...obj, current: cur };
    });
    // if(StepData.functions.length == 0){

    // }
  };
  const upIpfs = async () => {
    const maxAmount = ethers.utils.parseEther("1000000");
    const erc20 = ERC20__factory.connect('0xb57e3ca3507ebde804c382af775e5665b740981a', connection.signer);
    const receipt = await erc20.approve(
      '0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca',
      maxAmount,
    );
    await receipt.wait()
    if (getIpfsHash) {
      const contract = SafeMint__factory.connect(
        '0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca',
        connection.signer,
      );
      // const contract = new ethers.Contract(
      //   '0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca',
      //   SafeMint__factory.abi,
      //   connection.signer,
      // );
      try {
        if (!isSave) {
          const data = await contract.saveProject(
            stepData.name,
            stepData.address,
            stepData.time,
            new Date().getTime() / 1000,
            getIpfsHash,
          );
          message.success('上传成功');
          // 清空
          localStorage.setItem('safe-mint-dao', '');
          history.push({ pathname: '/home' })
        } else {
          // 修改项目
          const data = await contract.editProject(
            stepData.name,
            stepData.time,
            new Date().getTime() / 1000,
            getIpfsHash)
          message.success('修改成功');
          // 清空
          localStorage.setItem('safe-mint-dao', '');
          history.push({ pathname: '/home' })
        }
      } catch (err) {
        console.log('Error: ', err);
        message.error('上传失败')
      }
    }
  };
  useEffect(() => {
    if (stepData.current == 1) {
      currentChange(1);
    }
  }, [stepData.current]);
  useEffect(() => {
    const listener = (ev: { preventDefault: () => void }) => {
      ev.preventDefault();
      localStorage.setItem('safe-mint-dao', JSON.stringify(stepData));
    };
    window.addEventListener('beforeunload', listener);
    return () => {
      window.removeEventListener('beforeunload', listener);
    };
  }, [stepData]);
  const [current, setCurrent] = useState(stepData.current);
  const formRef = useRef<FormInstance>();
  const LAYOUT_TYPE_HORIZONTAL = 'horizontal';
  const formItemLayout = {
    labelCol: { span: 10 },
  };
  const handleInputBlur = (map: any) => {
    console.log('map', map)
    setStepData((obj) => {
      return { ...obj, ...map, current: current };
    });
  };

  const handleFunctionChange = (index: any, key: any, value: any, ary: any) => {
    //setparamsArray(ary);
    let functionArray = stepData.functions
    console.log('functionArray', functionArray)
    functionArray[index]['paramsArray'] = ary;
    functionArray[index][key] = value;
    functionArray[index]['param'] = "";
    setStepData((obj) => {
      return { ...obj, functions: functionArray };
    });
    console.log('stepData.functions', stepData.functions[index])
  };

  const handleFunctionBlue = (index: any, key: any, value: any) => {
    let functionArray = stepData.functions
    functionArray[index][key] = value;
    setStepData((obj) => {
      return { ...obj, functions: functionArray };
    });
    console.log('stepData.functions', stepData.functions[index])
  };
  return (
    connection.connected ? (
      <Card bordered={false} >
        <StepsForm
          current={current}
          onCurrentChange={currentChange}
          submitter={{
            render: (props, dom) => {
              if (props.step === 0) {
                return (
                  <Button type="primary" loading={loading} onClick={() => props.onSubmit?.()}>
                    NEXT: File Function
                  </Button>
                );
              }
              if (props.step === 1) {
                return (
                  <div className={styles.stepUp2div}>
                    <Button onClick={() => saveCurrent(0)}>save</Button>
                    <Button
                      type="primary"
                      className={styles.stepUp3button}
                      loading={loading}
                      onClick={() => props.onSubmit?.()}
                    >
                      Next
                    </Button>
                  </div>
                );
              }
              if (props.step === 2) {
                return <Button></Button>;
              }
              return dom;
            },
          }}
        >
          <StepsForm.StepForm<StepDataType>
            formRef={formRef}
            title="Project Info"
            layout={LAYOUT_TYPE_HORIZONTAL}
            {...formItemLayout}
            initialValues={stepData}
          >
            <div className={styles.submit1}>
              <Form.Item label="Logo">
                <ImageUploader
                  title="Upload"
                  initialUrl={stepData.logol}
                  onSuccess={(url) => {
                    handleInputBlur({ logol: url });
                  }}
                />
              </Form.Item>

              <Form.Item label="Project Banner">
                <ImageUploader
                  title="Upload Banner"
                  initialUrl={stepData.banner}
                  onSuccess={(url) => {
                    handleInputBlur({ banner: url });
                  }}
                />
              </Form.Item>

              {/* <Upload /> */}
              <ProFormText
                colProps={{ md: 12, xl: 8 }}
                label="Project Name"
                width="md"
                name="name"
                fieldProps={{
                  onBlur: (e) => {
                    handleInputBlur({ name: e.target.value });
                  },
                }}
                rules={[{ required: true, message: '' }]}
              />

              <ProFormTextArea
                label="Project Description"
                width="md"
                name="description"
                fieldProps={{
                  onBlur: (e) => {
                    handleInputBlur({ description: e.target.value });
                  },
                }}
              />
              <ProFormSelect
                options={[
                  {
                    value: 'Ethereum',
                    label: 'Ethereum'
                  },
                  {
                    value: 'Moonbeam',
                    label: 'Moonbeam',
                  },
                ]}
                rules={[{ required: true, message: '' }]}
                fieldProps={{
                  onChange: (e) => {
                    handleInputBlur({ chain: e });
                  },
                }}
                width="md"
                name="chain"
                placeholder="please select chain"
                label="Operating Chain"
              />
              <ProFormText
                label="Contract Address"
                rules={[{ required: true, message: '' }]}
                name="address"
                fieldProps={{
                  onBlur: (e) => {
                    handleInputBlur({ address: e.target.value });
                  },
                }}
                width="md"
              />
              <Form.Item label="Account Info">
                <Row align="middle" style={{ margin: '8px 0' }}>
                  <Col span={2}>
                    <img src={ImageCommon.website} style={{ width: '23px' }} />
                  </Col>
                  <Col span={8}>
                    <Input
                      onBlur={(e) => handleInputBlur({ website: e.target.value })}
                      placeholder="website"
                      defaultValue={stepData.website}
                      size="small"
                    />
                  </Col>
                </Row>
                <Row align="middle" style={{ margin: '17px 0' }}>
                  <Col span={2}>
                    <img src={ImageCommon.twitter} style={{ width: '23px' }} />
                  </Col>
                  <Col span={8}>
                    <Input
                      placeholder="Twitter handler"
                      onBlur={(e) => handleInputBlur({ twitter: e.target.value })}
                      defaultValue={stepData.twitter}
                      size="small"
                    />
                  </Col>
                </Row>
                <Row align="middle" style={{ margin: '17px 0' }}>
                  <Col span={2}>
                    <img src={ImageCommon.discord} style={{ width: '23px' }} />
                  </Col>
                  <Col span={8}>
                    <Input
                      placeholder="Discord username"
                      onBlur={(e) => handleInputBlur({ discord: e.target.value })}
                      defaultValue={stepData.discord}
                      size="small"
                    />
                  </Col>
                </Row>
                <Row align="middle" style={{ margin: '17px 0' }}>
                  <Col span={2}>
                    <img src={ImageCommon.telegram} style={{ width: '23px' }} />
                  </Col>
                  <Col span={8}>
                    <Input
                      placeholder="Telegram handler"
                      onBlur={(e) => handleInputBlur({ telegram: e.target.value })}
                      defaultValue={stepData.telegram}
                      size="small"
                    />
                  </Col>
                </Row>
              </Form.Item>
              <ProFormText
                colProps={{ md: 12, xl: 8 }}
                label="Total Supply"
                width="md"
                name="supply"
                fieldProps={{
                  onBlur: (e) => {
                    handleInputBlur({ supply: e.target.value });
                  },
                }}
              />
              <ProFormText
                colProps={{ md: 12, xl: 8 }}
                label="Max Amount per address"
                width="md"
                name="peraddress"
                fieldProps={{
                  onBlur: (e) => {
                    handleInputBlur({ peraddress: e.target.value });
                  },
                }}
              />
              <ProFormSwitch
                name="refundable"
                fieldProps={{
                  onChange: (e) => {
                    handleInputBlur({ refundable: e });
                  },
                }}
                label="Refundable"
              />
              <ProFormDateTimePicker
                name="time"
                label="Start Time"
                fieldProps={{
                  format: (value) => value.format('YYYY-MM-DD HH:mm:ss'),
                  onChange: (value) =>
                    //handleInputBlur({ time: value?.format('YYYY-MM-DD HH:mm:ss') }),
                    handleInputBlur({ time: (value?.valueOf()) / 1000 }),
                }}
              />
            </div>
          </StepsForm.StepForm>

          <StepsForm.StepForm title="Mint Function" layout={LAYOUT_TYPE_HORIZONTAL}>
            <div className={styles.submit2}>
              <ProFormList
                name="users"
                initialValue={stepData.functions}
                itemRender={({ listDom }, { index }) => (
                  <Form.Item label={`function${index + 1}`}>
                    {/* {listDom} */}
                    <ProFormGroup>
                      <div className={styles.submitOne}>
                        <div className={styles.submitTitle}>Function Name</div>
                        {/* <input name="name" /> */}
                        <ProFormSelect
                          name="name"
                          placeholder="Name"
                          options={ABIarry}
                          fieldProps={{
                            onChange: (value, params) =>
                              handleFunctionChange(index, 'name', value, params?.params),
                          }}
                        />
                      </div>
                    </ProFormGroup>
                    <ProFormGroup>
                      <div>
                        <div className={styles.submitTitle}>Free Mint?</div>
                        {/* <input name="name" /> */}
                        <ProFormSwitch
                          name="free"
                          fieldProps={{
                            onChange: (value) => handleFunctionBlue(index, 'free', value),
                          }}
                        />
                      </div>
                      <div>
                        <div className={styles.submitTitle}>Mint Price</div>
                        {/* <input name="name" /> */}
                        <ProFormDependency name={['free']}>
                          {({ free }) => {
                            return (
                              <ProFormText
                                disabled={!free}
                                width={100}
                                fieldProps={{
                                  onBlur: (e) => {
                                    handleFunctionBlue(index, 'price', e.target.value);
                                  },
                                }}
                                name="price"
                                placeholder="Input Price"
                              />
                            );
                          }}
                        </ProFormDependency>
                        {/* <ProFormText width={100} name="price" placeholder="Input Price" /> */}
                      </div>
                      <div>
                        <div className={styles.submitTitle}>For Mint Quantity</div>
                        {/* <input name="name" /> */}
                        <ProFormSelect
                          width={110}
                          name="param"
                          options={stepData.functions[index]['paramsArray']}
                          fieldProps={{
                            onChange: (value) => handleFunctionBlue(index, 'param', value),
                          }}
                          placeholder="Param Name"
                        />
                      </div>
                    </ProFormGroup>
                    <div className={styles.submitDescription}>
                      <ProFormTextArea
                        name="description"
                        fieldProps={{
                          onBlur: (e) => {
                            handleFunctionBlue(index, 'description', e.target.value);
                          },
                        }}
                        label="Function Description"
                      />
                    </div>
                    <div>
                      <div className={styles.submitTitle}>Restrict only for whitelister?</div>
                      {/* <input name="name" /> */}
                      <ProFormSwitch
                        fieldProps={{
                          onChange: (value) => handleFunctionBlue(index, 'whitelister', value),
                        }}
                        name="whitelister"
                      />
                    </div>
                  </Form.Item>
                )}
                creatorButtonProps={{
                  creatorButtonText: 'Add More Functions',
                }}
                actionGuard={{
                  beforeAddRow: async (defaultValue, insertIndex) => {
                    return new Promise((resolve) => {
                      stepData.functions = [
                        ...stepData.functions,
                        {
                          name: '',
                          free: false,
                          price: '',
                          param: '',
                          description: '',
                          whitelister: false,
                        },
                      ];
                      setTimeout(() => resolve(true), 1000);
                    });
                  },
                }}
              />
            </div>
            <div></div>
          </StepsForm.StepForm>
          <div className={styles.stepUp3}></div>
          <StepsForm.StepForm title="Check & Submit"></StepsForm.StepForm>
        </StepsForm>
        <div className={styles.stepHeight}></div>
        <div className={current === 2 ? styles.submitReactPreviewLast : styles.submitReactPreview}>
          {current != 2 && (<div className={styles.Previewtext}>Preview</div>)}
          <ReactPreview isComponent={true} data={stepData} />
          {current === 2 && (
            <div className={styles.stepUp3div}>
              <Button onClick={() => saveCurrent(1)}>save</Button>
              <Button
                type="primary"
                className={styles.stepUp3button}
                loading={loading}
                onClick={upIpfs}
              >
                Check & Submit
              </Button>
            </div>
          )}
        </div>
        {/* <Divider style={{ margin: '40px 0 24px' }} /> */}
      </Card >
    ) : (
      <Card className={styles.ConnectCard} bordered={false} >
        <h3>{`Welcome to SafeMint`}</h3>
        <ConnectButton onClick={onLoade} />
      </Card>
    )
  );
};

export default submit;
