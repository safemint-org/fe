import { NETWORKS } from '@/constants/networks';
import { StaticJsonRpcProvider } from '@ethersproject/providers';
export class Providers {
  private static _privicerCache = {} as Record<number, StaticJsonRpcProvider>;
  public static getProviderUrl(chainId: number) {
    return NETWORKS[chainId].rpcUrl;
  }
  public static getStaticProvider(chainId: number) {
    if (!this._privicerCache[chainId]) {
      this._privicerCache[chainId] = new StaticJsonRpcProvider(this.getProviderUrl(chainId));
    }
    return this._privicerCache[chainId];
  }
}
