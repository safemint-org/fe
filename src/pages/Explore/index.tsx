import { Button, Checkbox, Dropdown, Menu, Progress, Row, Space } from 'antd';

import ImageCommon from '@/assets/common';
import { BaseInput, FlexViewCenter } from '@/components/Common';
import { NetworkId } from '@/constants/networks';
import { Providers } from '@/helpers/providers/Providers';
import { ProjectInfo } from '@/helpers/types';
import { SafeMint__factory } from '@/typechain/factories/SafeMint__factory';
import { getProjectMetadata } from '@/utils/ipfs';
import { autoWidthVW, ellipseAddress } from '@/utils/utils';
import { DownOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

require('./index.less');

export const getPassed = async () => {
  console.log('getPassed start');
  const provider = Providers.getStaticProvider(NetworkId.TESTNET_RINKEBY);
  const contract = SafeMint__factory.connect(
    '0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca',
    provider,
  );
  // const [name, owner] = await contract.getPassed(1, 10);
  const projectInfo = await contract.getPending(0, 10);
  console.log('getPassed info');
  var projectInfos = [];
  if (projectInfo.length > 0) {
    console.log(projectInfo);
    //   console.log(ipfsCidUrl('QmYYH5RfCukNRyr9pdy68AHMJr3nFV94CopyTcFbKDGuBW'));

    projectInfo.forEach(async (item, index) => {
      if (index == 0) {
        return;
      }
      const ipfsAddress = 'QmYYH5RfCukNRyr9pdy68AHMJr3nFV94CopyTcFbKDGuBW';
      const storageData = localStorage.getItem(ipfsAddress);

      if (storageData == null) {
        const projectMetadata = await getProjectMetadata(ipfsAddress);
        projectInfos.push(projectMetadata);
        localStorage.setItem(ipfsAddress, JSON.stringify(projectMetadata));
      } else {
        const projectMetadata = JSON.parse(storageData) as ProjectInfo;
        console.log(projectMetadata);
        projectInfos.push(projectMetadata);
      }

      //  const projectMetadata = await getProjectMetadata(item.ipfsAddress);
    });
  }
  return projectInfos;
  //console.log(name, owner);
};

export default function Explore() {
  // useTrendingProjects();
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    //start();
    const infos = getPassed();
    console.log('infos');
    infos.then((res) => {
      console.log(res);
      setInfos(res);
      console.log(infos);
    });
  }, []);

  return (
    <Container>
      <H1>Explore Projects</H1>
      <SortComponent></SortComponent>
      <ItemContainer>
        {infos?.map((item) => {
          return (
            <Link to={{ pathname: '/preview', info: item }}>
              <Item item={item}></Item>
            </Link>
          );
        })}
        {/* <a href="/preview">
          <Item></Item>
        </a>
        <a href="/preview">
          <Item></Item>
        </a>
        <a href="/preview">
          <Item></Item>
        </a>
        <a href="/preview">
          <Item></Item>
        </a>
        <Link to={{ pathname: '/preview', info: { name: '测试内容', address: '0x123adas4' } }}>
          <Item></Item>
        </Link>
        <Link to={{ pathname: '/preview', info: { name: '测试内容', address: '0x123adas4' } }}>
          <Item></Item>
        </Link> */}
      </ItemContainer>
    </Container>
  );
}

const Item = (props) => {
  console.log('内容');
  console.log(props.item);
  return (
    <Content>
      <img
        src={props.item?.banner ? props.item?.banner : ImageCommon.banner_preview}
        style={{ width: '100%', height: 80 }}
      />
      <MainContent>
        <Row justify={'center'}>
          <UserIcon
            src={props.item?.logol != undefined ? props.item?.logol : ImageCommon.user_icon}
          ></UserIcon>
        </Row>
        <ContractInfo>
          <div></div>
          <div>
            <UserName>{props.item.name}</UserName>
            <Row justify={'center'} align={'middle'}>
              <ContractTitle>Contract：</ContractTitle>
              <ContractAddr>{ellipseAddress(props.item.address)}</ContractAddr>
              <ChainIcon src={ImageCommon.ETH}></ChainIcon>
            </Row>
          </div>
        </ContractInfo>
        {/* <Description>
          {'Supports projects built using the Juicebox protocol, and the development of the protocol itself. All projects withdrawing funds from their treasury.'.slice(
            0,
            80,
          )}
          <ReadMore>Read More</ReadMore>
        </Description> */}
        <Description>
          {props.item.description}
          <ReadMore>Read More</ReadMore>
        </Description>

        <InfoContainer>
          <div>
            <InfoTitle>TOTAL SUPPLY</InfoTitle>
            <InfoDesc>{props.item?.supply == '' ? 'UnKnow' : props.item?.supply}</InfoDesc>
          </div>
          <div>
            <InfoTitle>Refundable?</InfoTitle>
            <InfoDesc>{props.item?.refundable ? 'YES' : 'NO'}</InfoDesc>
          </div>
          <div>
            <PropertyBtn>WHITELIST ONLY</PropertyBtn>
          </div>
        </InfoContainer>
        <Flag></Flag>
        <NotLive></NotLive>
        {/*<ProgressBar></ProgressBar>*/}
        <BottomContainer justify={'space-between'} align={'middle'}>
          <Row>
            {props.item?.website != '' ? (
              <WebsiteIcon src={ImageCommon.website}></WebsiteIcon>
            ) : null}
            {props.item?.twitter != '' ? (
              <WebsiteIcon src={ImageCommon.twitter}></WebsiteIcon>
            ) : null}
            {props.item?.discord != '' ? (
              <WebsiteIcon src={ImageCommon.discord}></WebsiteIcon>
            ) : null}
            {props.item?.telegram != '' ? (
              <WebsiteIcon src={ImageCommon.telegram}></WebsiteIcon>
            ) : null}
            {/* <WebsiteIcon src={ImageCommon.twitter}></WebsiteIcon>
            <WebsiteIcon src={ImageCommon.discord}></WebsiteIcon>
            <WebsiteIcon src={ImageCommon.telegram}></WebsiteIcon> */}
          </Row>
          <Btn>Safemint</Btn>
        </BottomContainer>
      </MainContent>
    </Content>
  );
};
function SortComponent() {
  const menu = (
    <Menu
      // onClick={handleMenuClick}
      items={[
        {
          label: 'Latest',
          key: '1',
        },
      ]}
    />
  );
  return (
    <SortContainer justify={'end'} align={'middle'}>
      <Checkbox>Have whitelist</Checkbox>
      <PriceRange>Price Range :</PriceRange>
      <PriceInput placeholder={'Min'}></PriceInput>
      <PriceFlag>-</PriceFlag>
      <PriceInput placeholder={'Max'}></PriceInput>
      <Set>Set</Set>
      <PriceRange>Sort :</PriceRange>
      <Dropdown overlay={menu}>
        <Button>
          <Space>
            Latest
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </SortContainer>
  );
}
function NotLive() {
  return (
    <Row justify={'center'} align={'middle'}>
      <NotLiveFlag></NotLiveFlag>
      <StatusText>Not Live Yet</StatusText>
    </Row>
  );
}
function ProgressBar() {
  return (
    <Row justify={'space-between'}>
      <div style={{ width: '70%' }}>
        <Progress percent={30} showInfo={false} />
      </div>
      <span>
        <ProgressCurrent>8k</ProgressCurrent>
        <ProgressTotal>/16k</ProgressTotal>
      </span>
    </Row>
  );
}
const SortContainer = styled(Row)`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  padding-bottom: ${autoWidthVW(15)};
  margin-bottom: ${autoWidthVW(35)};
`;
const BottomContainer = styled(Row)`
  margin-top: ${autoWidthVW(15)};
`;
const ProgressCurrent = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(16)};
`;
const ProgressTotal = styled.span`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(16)};
`;
const NotLiveFlag = styled.div`
  width: ${autoWidthVW(8)};
  height: ${autoWidthVW(8)};
  border-radius: ${autoWidthVW(4)};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  margin-right: ${autoWidthVW(5)};
`;
const StatusText = styled.span`
  color: rgba(128, 128, 128, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
`;
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 5%;
`;
const Container = styled.div`
  background: #ffffff;
  padding: 5%;
`;
const ReadMore = styled.span`
  color: rgba(40, 233, 95, 1);
  font-size: ${autoWidthVW(14)};
  cursor: pointer;
`;
const H1 = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(28)};
  line-height: ${autoWidthVW(30)};
  margin-bottom: ${autoWidthVW(40)};
  text-align: center;
`;
const Content = styled.div`
  background: rgba(255, 255, 255, 1);
  background-blend-mode: normal;
  box-shadow: 0px 5px 12px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.25),
    0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: ${autoWidthVW(20)};
  overflow: hidden;
  cursor: pointer;
  margin-bottom: ${autoWidthVW(40)};
`;
const MainContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: ${autoWidthVW(50)};
  padding-bottom: ${autoWidthVW(50)};
  position: relative;
`;
const UserIcon = styled.img`
  width: ${autoWidthVW(100)};
  border-radius: ${autoWidthVW(15)};
  position: absolute;
  transform: translateY(-50%);
  top: 0;
`;
const UserName = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(22)};
  line-height: ${autoWidthVW(30)};
  text-align: center;
`;
const ContractTitle = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`;
const ContractAddr = styled.div`
  color: rgba(98, 126, 234, 1);
  font-size: ${autoWidthVW(12)};
  line-height: ${autoWidthVW(22)};
  margin-right: ${autoWidthVW(10)};
`;
const ChainIcon = styled.img`
  width: ${autoWidthVW(15)};
  height: ${autoWidthVW(15)};
`;
const ContractInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`;
const WebsiteIcon = styled.img`
  width: ${autoWidthVW(15)};
  height: ${autoWidthVW(15)};
  margin-right: ${autoWidthVW(8)};
`;
const DownIcon = styled.img`
  width: ${autoWidthVW(10)};
  height: ${autoWidthVW(10)};
  margin-right: ${autoWidthVW(10)};
`;
const DescriptionTitle = styled(Row)`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
`;
const Description = styled.div`
  color: rgba(128, 128, 128, 100);
  font-size: ${autoWidthVW(12)};
  margin-top: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`;
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: ${autoWidthVW(10)};
  margin-top: ${autoWidthVW(10)};
  align-items: center;
  text-align: center;
`;
const InfoTitle = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`;
const InfoDesc = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(18)};
`;

const PropertyBtn = styled(FlexViewCenter)`
  // padding-left:${autoWidthVW(5)};
  // padding-right:${autoWidthVW(5)};
  height: ${autoWidthVW(20)};
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(40, 233, 95, 1);
  color: rgba(56, 56, 56, 1);
  font-size: ${autoWidthVW(10)};
  line-height: 22px;
  cursor: pointer;
`;
const Flag = styled.div`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(10)};
`;
const Btn = styled(Row).attrs({
  justify: 'center',
  align: 'middle',
})`
  width: fit-content;
  width: ${autoWidthVW(120)};
  //height: ${autoWidthVW(22)};
  background: rgba(3, 101, 31, 1);
  border-radius: 2px;
  color: rgba(255, 255, 255, 1);
  font-size: ${autoWidthVW(18)};
  line-height: ${autoWidthVW(30)};
  //margin-right:${autoWidthVW(30)};
  cursor: pointer;
`;
const PriceRange = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
  margin-left: ${autoWidthVW(40)};
  margin-right: ${autoWidthVW(10)};
`;
const PriceInput = styled(BaseInput)`
  width: ${autoWidthVW(61)};
  height: ${autoWidthVW(25)};
  background: rgba(255, 255, 255, 1);
  border: 0.6px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  text-align: center;
  margin: 0 ${autoWidthVW(10)};
`;
const PriceFlag = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${autoWidthVW(12)};
  line-height: ${autoWidthVW(22)};
`;
const Set = styled.div`
  color: rgba(40, 233, 95, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
  cursor: pointer;
`;
