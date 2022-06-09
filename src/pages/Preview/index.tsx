import {Card, Col, Row,Image} from "antd";

import styles from './index.less';
import ImageCommon from "@/assets/common";
import styled from 'styled-components'
import {autoWidthVW} from "@/utils/utils";
import {BaseInput, FlexView, FlexViewCenter} from "@/components/Common";

export default function Preview(){
  return(
      <Row>
        <Col span={24}>
          <Image
            className={styles.image_header}
            preview={false}
            width={"100%"}
            src={ImageCommon.banner_preview}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col
          span={10}
          offset={6}
        >
          <Content>
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
                  <Row
                    justify={"space-between"}
                  >
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
              </ContractInfo>
              <DescriptionTitle
                align={"middle"}
              >
                <DownIcon src={ImageCommon.icon_down}></DownIcon>
                Project Description：
              </DescriptionTitle>
              <Description>
                Supports projects built using the Juicebox protocol, and the development of the protocol itself. All projects withdrawing funds from their treasury.
              </Description>
              <InfoContainer>
                <div>
                  <InfoTitle>TOTAL SUPPLY</InfoTitle>
                  <InfoDesc>10,0K</InfoDesc>
                </div>
                <div>
                  <InfoTitle>AVAILABLE TO MINT</InfoTitle>
                  <InfoDesc>2K</InfoDesc>
                </div>
                <div>
                  <InfoTitle>Holder Count</InfoTitle>
                  <InfoDesc>6.2K</InfoDesc>
                </div>
                <div>
                  <InfoTitle>Refundable?</InfoTitle>
                  <InfoDesc>Yes</InfoDesc>
                </div>
                <div>
                  <InfoTitle>MAX PER ADDRESS</InfoTitle>
                  <InfoDesc>unlimited</InfoDesc>
                </div>
                <div>
                  <InfoTitle>START TIME</InfoTitle>
                  <InfoDesc>2022.5.22</InfoDesc>
                </div>
              </InfoContainer>
              <PropertyContainer
                justify={"center"}
              >
                <div>
                  <InfoTitle>PROPERTIES</InfoTitle>
                  <PropertyBtn>WHITELIST ONLY</PropertyBtn>
                </div>
              </PropertyContainer>
              <div>
                <FuncName>BanaceOf</FuncName>
                <FuncDesc>Function description is here.
                  Function description is here.</FuncDesc>
                <FuncInfo>
                  <Btn>Safemint</Btn>
                  <div>
                    <PriceLable>Mint Price：</PriceLable>
                    <Price>1ETH</Price>
                  </div>
                </FuncInfo>
              </div>
              <div>
                <FuncName>BanaceOf</FuncName>
                <FuncDesc>Function description is here.
                  Function description is here.</FuncDesc>
              </div>
              <div>
                <FuncName>BanaceOf</FuncName>
                <FuncInput
                  placeholder={"Input Quantity"}
                ></FuncInput>
                <FuncInfo>
                  <Btn>Safemint</Btn>
                  <div>
                    <PriceLable>Mint Price：</PriceLable>
                    <Price>1ETH</Price>
                  </div>
                </FuncInfo>
              </div>
            </MainContent>

          </Content>
        </Col>
      </Row>
  )
}
const Content = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${autoWidthVW(10)};
`
const MainContent = styled.div`
  width: 80%;
  margin:0 auto;
  padding-top:${autoWidthVW(100)};
  padding-bottom:${autoWidthVW(100)};
`
const UserIcon = styled.img`
  width:${autoWidthVW(150)};
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
  margin-top: ${autoWidthVW(8)};
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
  grid-template-columns: repeat(3,1fr);
  grid-row-gap: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(20)};
  >div:nth-child(3n+1) {
    text-align: left;
  }
  >div:nth-child(3n+2) {
    text-align: center;
  }
  >div:nth-child(3n+3) {
    text-align: right;
  }
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
const PropertyContainer = styled(Row)`
  margin-top: ${autoWidthVW(20)};
  >div {
    text-align: center;
  }
`
const PropertyBtn = styled(FlexViewCenter)`
  padding-left:${autoWidthVW(10)};
  padding-right:${autoWidthVW(10)};
  height: ${autoWidthVW(20)};
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(40, 233, 95, 1);
  color: rgba(56, 56, 56, 1);
  font-size: ${autoWidthVW(12)};
  line-height: 22px;
`
const Flag = styled.div`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(10)};
`
const FuncName = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(18)};
  line-height: ${autoWidthVW(30)};
  margin-top: ${autoWidthVW(20)};
  border-bottom: 1px solid rgba(166, 166, 166, 1);
`
const FuncDesc = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(16)};
  line-height: ${autoWidthVW(30)};
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
  margin-right:${autoWidthVW(30)};
  cursor: pointer;
`
const FuncInfo = styled(Row).attrs({
  align:"middle"
})`
  margin-top:${autoWidthVW(10)};
`
const PriceLable = styled.span`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(12)};
  line-height:${autoWidthVW(22)};
  margin-right:${autoWidthVW(5)};
`
const Price = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(16)};
  line-height:${autoWidthVW(22)};
`
const FuncInput = styled(BaseInput)`
  width: ${autoWidthVW(120)};
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.25);
  font-size: ${autoWidthVW(16)};
  line-height:${autoWidthVW(20)};
  margin-top:${autoWidthVW(10)};
`
