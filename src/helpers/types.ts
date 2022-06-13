export interface IAssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}

export interface ProjectInfo {
  logol: string;
  banner: string;
  name: string;
  description: string;
  chain: string;
  address: string;
  website: string;
  twitter: string;
  discord: string;
  telegram: string;
  supply: string;
  peraddress: string;
  time: string;
  refundable: boolean;
  functions: ProjectFunction[];
  current: number;
}

export interface ProjectFunction {
  name: string;
  free: boolean;
  price: string;
  param: string;
  description: string;
  whitelister: boolean;
}
