import styles from './index.less';
import { CloseCircleOutlined } from '@ant-design/icons';
import ReactPreview from '@/components/ReactPreview';
import { Button, Space, Modal, Input, message } from 'antd';
import { Providers } from '@/helpers/providers/Providers';
import { NetworkId } from '@/constants/networks';
import { getProjectMetadata } from '@/utils/ipfs';
import { history, useModel } from 'umi';
import { SafeMintAudit__factory } from '@/typechain/factories/SafeMintAudit__factory';
import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom'

const { confirm } = Modal;
const { TextArea } = Input;

// const provider = Providers.getStaticProvider(NetworkId.TESTNET_RINKEBY);
// console.log('provider', provider)
// const auditContract = null;

// SafeMintAudit__factory.connect(
//   '0x783c8805e11bcd97df88c6274309687e13476106',
//   provider,
// );

// export interface IPreview {
//   isComponent?: boolean;
//   data?: ProjectInfo;
// }
// export interface ProjectInfo {
//   logol: string;
//   banner: string;
//   name: string;
//   description: string;
//   chain: string;
//   address: string;
//   website: string;
//   twitter: string;
//   discord: string;
//   telegram: string;
//   supply: string;
//   peraddress: string;
//   time: string;
//   refundable: boolean;
//   functions: ProjectFunction[];
// }

// export interface ProjectFunction {
//   name: string;
//   price: string;
//   param: string;
//   description: string;
//   whitelister: boolean;
// }

function VerifyView() {
  const { connection } = useModel('useWeb3Model', (model) => ({
    connection: model.connection
  }));
  const auditContract = SafeMintAudit__factory.connect(
    '0x783c8805e11bcd97df88c6274309687e13476106',
    connection.signer,
  );
  //if (!connection.hasRole) return <Redirect to="/404" />
  //const item = { name: '测试', address: '0xjjklajsdfladjf1229329392' };
  const [getValue, setValve] = useState('');
  const [getName, setName] = useState('');
  const [getAddress, setAddress] = useState('');
  let value = ''
  let info = history.location.info;
  let hashAddress = history.location.hashAddress

  //return <div>{JSON.stringify(info[1])}</div>;
  const router = useHistory()

  const passedProject = () => {
    confirm({
      title: 'Passed',
      content: 'Are you sure to pass this project',
      okText: 'confirm',
      cancelText: 'cancel',
      async onOk() {
        try {
          await auditContract.audit(info.name, '', 1)
          message.success('审核成功');
        } catch (error) {
          message.error('失败');
        }
      },
    });
  };

  const onChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    value = e.target.value
  };

  const rejectProject = () => {
    confirm({
      title: 'Are you sure reject this project?',
      content: <TextArea rows={4} onChange={onChange} placeholder="Please describe the reason for rejection" />,
      okText: 'reject',
      cancelText: 'cancel',
      async onOk() {
        try {
          console.log('信息', info.name, value, 2)
          await auditContract.audit(info.name, value, 2)
          message.success('审核成功');
        } catch (error) {
          console.log(error)
          message.error('失败');
        }
      },
    });
  };

  const lockedProject = () => {
    confirm({
      icon: <CloseCircleOutlined />,
      title: 'Are you sure locked this project?',
      content: <TextArea rows={4} onChange={onChange} placeholder="Please describe the reason for rejection" />,
      okText: 'confirm',
      cancelText: 'cancel',
      async onOk() {
        try {
          await auditContract.audit(info.name, value, 4)
          message.success('审核成功');
        } catch (error) {
          message.error('失败');
        }
      },
    });
  };

  const ReSetProject = (address) => {
    // 校验钱包地址是否相等
    if (hashAddress != address) {
      message.error('无权限');
      return false;
    }
    console.log('info的', info)
    info.current = 0;
    // 覆盖
    localStorage.setItem('safe-mint-dao', JSON.stringify(info));
    // 跳转
    router.push({ pathname: '/Submit', isSave: true })
  }

  const type = history.location.type;

  return (
    <div>
      <ReactPreview isComponent={false} data={info}>
        <div className={styles.VerifyView}>
          {/* <LocalizedModal />   */}
          {type === 'Pending' && (
            <Space size={30}>
              <Button onClick={passedProject} type="primary">Passed</Button>
              <Button onClick={rejectProject}>Reject</Button>
              <Button onClick={lockedProject} danger>Locked</Button>
            </Space>
          )}
          {type === 'Reject' && (
            <Space size={30}>
              <Button onClick={() => ReSetProject(connection.address)} type="primary">Reset</Button>
              <Button onClick={lockedProject} danger>Locked</Button>
            </Space>
          )}
        </div>
      </ReactPreview>
    </div>
  );
}

export default VerifyView