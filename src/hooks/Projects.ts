import { IpfsCacheName } from '@/models/ipfs-cache/cache-name';
import { getPinnedListByTag } from '@/utils/ipfs';
import { useEffect } from 'react';

export function useTrendingProjects() {
  useEffect(() => {
    async function start() {
      const jsonRes = await getPinnedListByTag(IpfsCacheName.trendingV2);
      console.log('getPinnedListByTag');
      console.log(jsonRes);
    }
    start();
  }, []);
}
