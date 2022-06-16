import ReactPreview from '@/components/ReactPreview';
import { history } from 'umi';

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
export default function Preview() {
  console.log(history.location.info);
  const info = history.location.info;
  //const item = { name: '测试', address: '0xjjklajsdfladjf1229329392' };
  return <ReactPreview isComponent={false} data={info} />;
}
