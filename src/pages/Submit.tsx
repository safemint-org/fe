import type { FormInstance } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import moment from 'moment';
import { Providers } from '@/helpers/providers/Providers';
import { NetworkId } from '@/constants/networks';
import { SafeMint__factory } from '@/typechain/factories/SafeMint__factory';
import { TokenERC20__factory } from '@/typechain/factories/TokenERC20__factory';
import { Card, message, Result, Form, Input, Button, Descriptions, Divider, Alert, Statistic, Row, Col } from 'antd';
import ImageUploader from '@/components/RightContent/ImageUploader'
import { ProForm, ProFormSelect, ProFormText, StepsForm, ProFormDependency, ProFormTextArea, ProFormSwitch, ProFormGroup, ProFormList, ProFormDateTimePicker } from '@ant-design/pro-form';
import type { StepDataType } from './data'
import styles from './submit.less';
import { ethers } from 'ethers'
import { TwitterSquareFilled } from '@ant-design/icons';
import ReactPreview from '@/components/ReactPreview';
import ImageCommon from "@/assets/common";
import { useModel, request } from 'umi';
import type { ProjectInfo } from "@/helpers/types";
import {
  uploadProjectMetadata,
} from '@/utils/ipfs'

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
  const storageData = localStorage.getItem('safe-mint-dao');
  const { connection } = useModel('useWeb3Model', model => (
    {
      connection: model.connection
    }
  ))
  //const ABIFunctionArray: any[] = []
  const [ABIarry, setABIarry] = useState([]);
  const [getIpfsHash, setIpfsHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [paramsArray, setparamsArray] = useState([]);
  const [stepData, setStepData] = useState<ProjectInfo>(
    storageData
      ? JSON.parse(storageData)
      : {
        logol: '',
        banner: '',
        name: '',
        description: '',
        chain: '',
        address: '0xAcc15dC74880C9944775448304B263D191c6077F',
        website: '',
        twitter: '',
        discord: '',
        telegram: '',
        supply: '',
        peraddress: '',
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
        refundable: false,
        functions: [
          {
            name: '',
            free: false,
            price: '',
            param: '',
            description: '',
            whitelister: false,
          },
        ],
        current: 0,
      },
  );

  const currentChange = async (cur: React.SetStateAction<number>) => {
    if (cur == 1) {
      setLoading(true);
      const data = await request(
        `https://api-moonbeam.moonscan.io/api?module=contract&action=getabi&address=${stepData.address}&apikey=YourApiKeyToken`,
      );
      if (data.message !== 'OK') {
        message.error('调用合约失败，请检查合约地址');
        return false;
      }
      message.success('合约获取成功');
      const abi = JSON.parse(data?.result);
      const array = [];
      for (const i in abi) {
        if (abi[i].type == 'function' && abi[i].stateMutability.includes('payable')) {
          const func = abi[i];
          const paramsArray = [];
          for (const j in func.inputs) paramsArray.push(func.inputs[j].name);
          array.push({ label: func.name, value: func.name, params: paramsArray });
        }
      }
      setABIarry(array);
      setLoading(false);
    }
    if (cur == 2) {
      const { IpfsHash } = await uploadProjectMetadata(stepData)
      if (!IpfsHash) {
        message.error('上传失败');
        return false;
      }
      setIpfsHash(IpfsHash)
    }
    setCurrent(cur);
    setStepData((obj) => {
      return { ...obj, current: cur };
    });
  };
  const upIpfs = async () => {
    if (getIpfsHash) {
      const contract = new ethers.Contract('0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca', SafeMint__factory.abi, connection.signer)
      try {
        const data = await contract.saveProject(stepData.name, stepData.address, 0, 20, getIpfsHash)
        // 清空
        localStorage.setItem('safe-mint-dao', '')

      } catch (err) {
        console.log("Error: ", err)
      }
    }
  };
  useEffect(() => {
    if (stepData.current == 1) {
      currentChange(1)
    }
  }, [stepData.current])
  useEffect(() => {
    const listener = (ev: { preventDefault: () => void; }) => {
      ev.preventDefault();
      localStorage.setItem('safe-mint-dao', JSON.stringify(stepData));
    };
    window.addEventListener('beforeunload', listener);
    return () => {
      window.removeEventListener('beforeunload', listener)
    }
  }, [stepData]);
  const [current, setCurrent] = useState(stepData.current);
  const formRef = useRef<FormInstance>();
  const LAYOUT_TYPE_HORIZONTAL = 'horizontal';
  const formItemLayout = {
    labelCol: { span: 10 },
  };
  const handleInputBlur = (map: any) => {
    setStepData((obj) => {
      return { ...obj, ...map, current: current };
    });
  };

  const handleFunctionChange = (index: any, key: any, value: any, ary: any) => {
    setparamsArray(ary);
    stepData.functions[index][key] = value;
  };

  const handleFunctionBlue = (index: any, key: any, value: any) => {
    stepData.functions[index][key] = value;
  };
  return (
    <Card bordered={false}>
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
            if (props.step === 2) {
              return (
                <Button></Button>
              );
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
                <Col span={2}><img src={ImageCommon.website} style={{ width: "23px" }} /></Col>
                <Col span={8}><Input onBlur={(e) => handleInputBlur({ 'website': e.target.value })} placeholder="website" name="website" size="small" /></Col>
              </Row>
              <Row align="middle" style={{ margin: '17px 0' }}>
                <Col span={2}><img src={ImageCommon.twitter} style={{ width: "23px" }} /></Col>
                <Col span={8}><Input placeholder="Twitter handler" onBlur={(e) => handleInputBlur({ 'twitter': e.target.value })} name="twitter" size="small" /></Col>
              </Row>
              <Row align="middle" style={{ margin: '17px 0' }}>
                <Col span={2}><img src={ImageCommon.discord} style={{ width: "23px" }} /></Col>
                <Col span={8}><Input placeholder="Discord username" onBlur={(e) => handleInputBlur({ 'discord': e.target.value })} name="discord" size="small" /></Col>
              </Row>
              <Row align="middle" style={{ margin: '17px 0' }}>
                <Col span={2}><img src={ImageCommon.telegram} style={{ width: "23px" }} /></Col>
                <Col span={8}><Input placeholder="Telegram handler" onBlur={(e) => handleInputBlur({ 'telegram': e.target.value })} name="telegram" size="small" /></Col>
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
                onChange: (value) => handleInputBlur({ time: value }),
              }}
            />
          </div>
        </StepsForm.StepForm>

        <StepsForm.StepForm title="Mint Function" layout={LAYOUT_TYPE_HORIZONTAL}>
          <div className={styles.submit2}>
            <ProFormList name="users" initialValue={stepData.functions} itemRender={({ listDom }, { index }) => (
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
                      fieldProps={{ onChange: (value, params) => handleFunctionChange(index, 'name', value, params?.params) }} />
                  </div>
                </ProFormGroup>
                <ProFormGroup>
                  <div>
                    <div className={styles.submitTitle}>Free Mint?</div>
                    {/* <input name="name" /> */}
                    <ProFormSwitch name="free" fieldProps={{ onChange: (value) => handleFunctionBlue(index, 'free', value) }} />
                  </div>
                  <div>
                    <div className={styles.submitTitle}>Mint Price</div>
                    {/* <input name="name" /> */}
                    <ProFormDependency name={['free']}>
                      {({ free }) => {
                        return <ProFormText disabled={!free} width={100} fieldProps={{
                          onBlur: (e) => {
                            handleFunctionBlue(index, 'price', e.target.value)
                          },
                        }} name="price" placeholder="Input Price" />
                      }}
                    </ProFormDependency>
                    {/* <ProFormText width={100} name="price" placeholder="Input Price" /> */}
                  </div>
                  <div>
                    <div className={styles.submitTitle}>For Mint Quantity</div>
                    {/* <input name="name" /> */}
                    <ProFormSelect width={110} name="param" options={paramsArray} fieldProps={{ onChange: (value) => handleFunctionBlue(index, 'param', value) }} placeholder="Param Name" />
                  </div>
                </ProFormGroup>
                <div className={styles.submitDescription} >
                  <ProFormTextArea name="description" fieldProps={{
                    onBlur: (e) => {
                      handleFunctionBlue(index, 'description', e.target.value)
                    },
                  }} label="Function Description" />
                </div>
                <div>
                  <div className={styles.submitTitle}>Restrict only for whitelister?</div>
                  {/* <input name="name" /> */}
                  <ProFormSwitch fieldProps={{ onChange: (value) => handleFunctionBlue(index, 'whitelister', value) }} name="whitelister" />
                </div>
              </Form.Item>
            )} creatorButtonProps={{
              creatorButtonText: 'Add More Functions',
            }} actionGuard={{
              beforeAddRow: async (defaultValue, insertIndex) => {
                return new Promise((resolve) => {
                  stepData.functions = [...stepData.functions, {
                    name: '',
                    free: false,
                    price: '',
                    param: '',
                    description: '',
                    whitelister: false
                  }]
                  setTimeout(() => resolve(true), 1000);
                });
              }
            }} />
          </div>
        </StepsForm.StepForm>

        <StepsForm.StepForm title="Check & Submit"></StepsForm.StepForm>
      </StepsForm>
      <div className={current === 2 ? styles.submitReactPreviewLast : styles.submitReactPreview}>
        <div className={styles.Previewtext}>Preview</div>
        <ReactPreview isComponent={true} data={stepData} />
        {current === 2 && (<Button type="primary" loading={loading} onClick={() => upIpfs}>
          NEXT: File Function
        </Button>)}
      </div>
      {/* <Divider style={{ margin: '40px 0 24px' }} /> */}
    </Card >
  );
};

export default submit;