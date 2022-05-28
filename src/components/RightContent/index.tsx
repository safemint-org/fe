import { Space, Button, Input } from 'antd';
import { QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react'
import React from 'react';
import { useModel, SelectLang } from 'umi';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { ethers } from "ethers";
import { Avatar, Menu } from 'antd';
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from "fortmatic";
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import { NETWORKS } from "@/constants/networks"
import { IAssetData } from "@/helpers/types";
import { ellipseAddress } from "@/utils/utils";
import HeaderDropdown from '../HeaderDropdown';


// import Account from '@/components/RightContent/Account'


export type SiderTheme = 'light' | 'dark';


interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  assets: IAssetData[];
  showModal: boolean;
  pendingRequest: boolean;
  result: any | null;
}


const INITIAL_STATE: IAppState = {
  fetching: false,
  address: "",
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null
};

const { Search } = Input;

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const [state, setState] = useState({
    ...INITIAL_STATE
  });

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
  const getNetwork = (id) => NETWORKS[id].name
  const web3Modal = new Web3Modal({
    network: getNetwork(state.chainId),
    cacheProvider: true,
    providerOptions: getProviderOptions()
  });

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  const onLoade = async () => {

    // web3Modal.clearCachedProvider()

    const instance = web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(await instance);
    const signer = provider.getSigner();
    const accounts = await provider.listAccounts();
    const { chainId } = await provider.getNetwork()
    const address = accounts[0];
    await setState({
      instance,
      connected: true,
      address,
      chainId
    });
  }

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onLoade();
    }
  }, [])

  const clear = () => {
    web3Modal.clearCachedProvider()
    setState({ ...INITIAL_STATE });
  }

  const menuItems: any[] = [
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
    },
  ];

  const onSearch = () => {

  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={clear} items={menuItems} />
  );

  return (
    <Space className={className}>
      {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} /> */}
      {state.address && (
        (<HeaderDropdown overlay={menuHeaderDropdown}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" alt="avatar" />
            <div className={`${styles.name} anticon`}>{ellipseAddress(state.address)}</div>
          </span>
        </HeaderDropdown>))}

      {!state.address && (<Button onClick={onLoade}> Connect </Button>)}

      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue="umi ui"
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        onSearch={value => {
          console.log('input', value);
        }}
      />



      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
