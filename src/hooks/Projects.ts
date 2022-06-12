import axios from "axios";
import {useEffect} from "react";
import {getPinnedListByTag, IPFS_TAGS} from "@/utils/ipfs";
import {IpfsCacheName} from "@/models/ipfs-cache/cache-name";

export function useTrendingProjects(){
  useEffect(()=>{
    async function start(){
      const jsonRes = await getPinnedListByTag(IpfsCacheName.trendingV2)
      console.log(jsonRes)
    }
    start()
  },[])

}
