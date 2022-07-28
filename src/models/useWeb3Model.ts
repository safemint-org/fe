import { useState } from 'react';

interface IAppState {
  fetching: boolean;
  address: string;
  web3: any;
  provider: any;
  connected: boolean;
  chainId: number;
  networkId: number;
  hasRole: boolean;
}

const INITIAL_STATE: IAppState = {
  fetching: false,
  address: '',
  web3: null,
  provider: null,
  connected: false,
  chainId: 4,
  networkId: 1,
  hasRole: false,
};

const useWeb3Model = () => {
  const [connection, setconnection] = useState({
    ...INITIAL_STATE,
  });
  return {
    connection,
    setconnection,
  };
};

export default useWeb3Model;
