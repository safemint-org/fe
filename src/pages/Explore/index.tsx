import {Card, Col, Row, Image, Progress, Checkbox, Menu, Space, Dropdown, Button} from "antd";

import ImageCommon from "@/assets/common";
import styled from 'styled-components'
import {autoWidthVW} from "@/utils/utils";
import {BaseInput, FlexView, FlexViewCenter} from "@/components/Common";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import {useTrendingProjects} from "@/hooks/Projects";
require("./index.less")
export default function Explore(){
  const { data: projects, isLoading } = useTrendingProjects(
    12,
    7,
  )
  console.log(projects)
  return(
    <Container>
      <H1>Explore Projects</H1>
      <SortComponent></SortComponent>
      <ItemContainer>
        <a href="/preview"><Item></Item></a>
        <a href="/preview"><Item></Item></a>
          <a href="/preview"><Item></Item></a>
      </ItemContainer>

    </Container>
  )
}

function Item(){
  return(
    <Content>
      <img src={ImageCommon.banner_explore} style={{width:"100%"}}/>
        <MainContent>
          <Row
            justify={"center"}
          >
            <UserIcon
              src={ImageCommon.user_icon}
            ></UserIcon>
          </Row>
          <ContractInfo>
            <div></div>
            <div>
              <UserName>CRYPTOMEWO</UserName>
              <Row
                justify={"center"}
                align={"middle"}
              >
                <ContractTitle>Contract：</ContractTitle>
                <ContractAddr>0x1234..3254</ContractAddr>
                <ChainIcon src={ImageCommon.ETH}></ChainIcon>
              </Row>
            </div>

          </ContractInfo>
          <Description>
            {"Supports projects built using the Juicebox protocol, and the development of the protocol itself. All projects withdrawing funds from their treasury.".slice(0,80)}
            <ReadMore>Read More</ReadMore>
          </Description>

          <InfoContainer>
            <div>
              <InfoTitle>Holder</InfoTitle>
              <InfoDesc>10,0K</InfoDesc>
            </div>
            <div>
              <InfoTitle>Refundable?</InfoTitle>
              <InfoDesc>2K</InfoDesc>
            </div>
            <div>
              <PropertyBtn>WHITELIST ONLY</PropertyBtn>
            </div>
          </InfoContainer>
          <Flag></Flag>
          <NotLive></NotLive>
          {/*<ProgressBar></ProgressBar>*/}
          <BottomContainer
            justify={"space-between"}
            align={"middle"}
          >
            <Row>
              <WebsiteIcon
                src={ImageCommon.website}
              ></WebsiteIcon>
              <WebsiteIcon
                src={ImageCommon.twitter}
              ></WebsiteIcon>
              <WebsiteIcon
                src={ImageCommon.discord}
              ></WebsiteIcon>
              <WebsiteIcon
                src={ImageCommon.telegram}
              ></WebsiteIcon>
            </Row>
            <Btn>Safemint</Btn>
          </BottomContainer>
        </MainContent>
    </Content>
  )
}
function SortComponent(){
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
  return(
    <SortContainer
      justify={"end"}
      align={"middle"}
    >
      <Checkbox>Have whitelist</Checkbox>
      <PriceRange>Price Range :</PriceRange>
      <PriceInput
        placeholder={"Min"}
      ></PriceInput>
      <PriceFlag>-</PriceFlag>
      <PriceInput
        placeholder={"Max"}
      ></PriceInput>
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
  )
}
function NotLive(){
  return(
    <Row
      justify={"center"}
      align={"middle"}
    >
      <NotLiveFlag></NotLiveFlag>
      <StatusText>Not Live Yet</StatusText>
    </Row>
  )
}
function ProgressBar(){
  return(
    <Row
      justify={"space-between"}
    >
     <div
      style={{width:"70%"}}
     ><Progress percent={30} showInfo={false}/></div>
      <span>
        <ProgressCurrent>8k</ProgressCurrent>
      <ProgressTotal>/16k</ProgressTotal>
      </span>
    </Row>
  )
}
const SortContainer = styled(Row)`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  padding-bottom: ${autoWidthVW(15)};
  margin-bottom: ${autoWidthVW(35)};
`
const BottomContainer = styled(Row)`
  margin-top:${autoWidthVW(15)};
`
const ProgressCurrent = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(16)};
`
const ProgressTotal = styled.span`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(16)};
`
const NotLiveFlag = styled.div`
  width: ${autoWidthVW(8)};
  height: ${autoWidthVW(8)};
  border-radius: ${autoWidthVW(4)};
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  margin-right: ${autoWidthVW(5)};
`
const StatusText = styled.span`
  color: rgba(128, 128, 128, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
`
const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-column-gap: 5%;
`
const Container = styled.div`
  background: #FFFFFF;
  padding:5%;
`
const ReadMore = styled.span`
  color: rgba(40, 233, 95, 1);
  font-size: ${autoWidthVW(14)};
  cursor: pointer;
`
const H1 = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(28)};
  line-height: ${autoWidthVW(30)};
  margin-bottom: ${autoWidthVW(40)};
  text-align: center;
`
const Content = styled.div`
  background: rgba(255, 255, 255, 1);
  background-blend-mode: normal;
  box-shadow: 0px 5px 12px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.25), 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: ${autoWidthVW(20)};
  overflow: hidden;
  cursor: pointer;
`
const MainContent = styled.div`
  width: 80%;
  margin:0 auto;
  padding-top:${autoWidthVW(50)};
  padding-bottom:${autoWidthVW(50)};
  position: relative;
`
const UserIcon = styled.img`
  width:${autoWidthVW(100)};
  border-radius: ${autoWidthVW(15)};
  position: absolute;
  transform: translateY(-50%);
  top:0;
`
const UserName = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(22)};
  line-height: ${autoWidthVW(30)};
  text-align: center;
`
const ContractTitle = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`
const ContractAddr = styled.div`
  color: rgba(98, 126, 234, 1);
  font-size: ${autoWidthVW(12)};
  line-height: ${autoWidthVW(22)};
  margin-right: ${autoWidthVW(10)};
`
const ChainIcon = styled.img`
  width: ${autoWidthVW(15)};
  height: ${autoWidthVW(15)};
`
const ContractInfo = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`
const WebsiteIcon = styled.img`
  width: ${autoWidthVW(15)};
  height: ${autoWidthVW(15)};
  margin-right: ${autoWidthVW(8)};
`
const DownIcon = styled.img`
  width: ${autoWidthVW(10)};
  height: ${autoWidthVW(10)};
  margin-right: ${autoWidthVW(10)};
`
const DescriptionTitle = styled(Row)`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
`
const Description = styled.div`
  color: rgba(128, 128, 128, 100);
  font-size: ${autoWidthVW(12)};
  margin-top: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`
const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,auto);
  grid-row-gap: ${autoWidthVW(10)};
  margin-top: ${autoWidthVW(10)};
  align-items: center;
  text-align: center;

`
const InfoTitle = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
`
const InfoDesc = styled.div`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(18)};
`

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
`
const Flag = styled.div`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(10)};
`
const Btn = styled(Row).attrs({
  justify:"center",
  align:"middle"
})`
  width:fit-content;
  width: ${autoWidthVW(120)};
  //height: ${autoWidthVW(22)};
  background: rgba(3, 101, 31, 1);
  border-radius: 2px;
  color: rgba(255, 255, 255, 1);
  font-size: ${autoWidthVW(18)};
  line-height:${autoWidthVW(30)};
  //margin-right:${autoWidthVW(30)};
  cursor: pointer;
`
const PriceRange = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(14)};
  line-height: ${autoWidthVW(22)};
  margin-left: ${autoWidthVW(40)};
  margin-right: ${autoWidthVW(10)};
`
const PriceInput = styled(BaseInput)`
  width: ${autoWidthVW(61)};
  height: ${autoWidthVW(25)};
  background: rgba(255, 255, 255, 1);
  border: 0.6px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  text-align: center;
  margin:0 ${autoWidthVW(10)};
`
const PriceFlag = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: ${autoWidthVW(12)};
  line-height: ${autoWidthVW(22)};

`
const Set = styled.div`
  color: rgba(40, 233, 95, 1);
  font-size: ${autoWidthVW(10)};
  line-height: ${autoWidthVW(22)};
  cursor:pointer;
`
