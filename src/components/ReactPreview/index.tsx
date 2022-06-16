import ImageCommon from '@/assets/common';
import { BaseInput, FlexViewCenter } from '@/components/Common';
import type { ProjectInfo } from '@/helpers/types';
import { autoWidthVW, ellipseAddress } from '@/utils/utils';
import { Col, Image, Row } from 'antd';
import styled from 'styled-components';

const styles = require('./index.less');
export interface IPreview {
  isComponent?: boolean;
  data?: ProjectInfo;
}

const ReactPreview: React.FC<IPreview> = (props) => {
  const { isComponent, data } = props;
  return (
    <Row style={{ background: '#FFFFFF' }}>
      <Col span={24}>
        <Image
          className={styles.image_header}
          preview={false}
          width={'100%'}
          src={data?.banner ? data?.banner : ImageCommon.banner_preview}
        />
      </Col>
      <Col span={isComponent ? 24 : 10} offset={isComponent ? 0 : 6}>
        <Content>
          <MainContent>
            <Row justify={'center'}>
              <UserIcon
                src={data?.logol != undefined ? data?.logol : ImageCommon.user_icon}
              ></UserIcon>
            </Row>
            <ContractInfo>
              <div></div>
              <div>
                <UserName>{data?.name}</UserName>
                <Row justify={'center'} align={'middle'}>
                  <ContractTitle>Contract：</ContractTitle>
                  <ContractAddr>{ellipseAddress(data?.address)}</ContractAddr>
                  <ChainIcon src={ImageCommon.ETH}></ChainIcon>
                </Row>
              </div>
              <Row justify={'space-between'}>
                <a href={data?.website}>
                  <WebsiteIcon src={ImageCommon.website}></WebsiteIcon>
                </a>
                <a href={data?.twitter}>
                  <WebsiteIcon src={ImageCommon.twitter}></WebsiteIcon>
                </a>
                <a href={data?.discord}>
                  <WebsiteIcon src={ImageCommon.discord}></WebsiteIcon>
                </a>
                <a href={data?.telegram}>
                  <WebsiteIcon src={ImageCommon.telegram}></WebsiteIcon>
                </a>
              </Row>
            </ContractInfo>
            <DescriptionTitle align={'middle'}>
              <DownIcon src={ImageCommon.icon_down}></DownIcon>
              Project Description：
            </DescriptionTitle>
            <Description>{data?.description}</Description>
            <InfoContainer>
              <div>
                <InfoTitle>TOTAL SUPPLY</InfoTitle>
                <InfoDesc>{data?.supply}</InfoDesc>
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
            <PropertyContainer justify={'center'}>
              <div>
                <InfoTitle>PROPERTIES</InfoTitle>
                <PropertyBtn>WHITELIST ONLY</PropertyBtn>
              </div>
            </PropertyContainer>
            {data?.functions?.map((item, index) => {
              return (
                <div>
                  <FuncName>{item.name}</FuncName>
                  <FuncDesc>{item.description}</FuncDesc>
                  <FuncInfo>
                    <Btn>Safemint</Btn>
                    <div>
                      <PriceLable>Mint Price：</PriceLable>
                      <Price>{item.price}</Price>
                    </div>
                  </FuncInfo>
                </div>
              );
            })}

            <div>
              <FuncName>BanaceOf</FuncName>
              <FuncDesc>Function description is here. Function description is here.</FuncDesc>
            </div>
            <div>
              <FuncName>BanaceOf</FuncName>
              <FuncInput placeholder={'Input Quantity'}></FuncInput>
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
  );
};
const Content = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${autoWidthVW(10)};
`;
const MainContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: ${autoWidthVW(100)};
  padding-bottom: ${autoWidthVW(100)};
`;
const UserIcon = styled.img`
  width: ${autoWidthVW(150)};
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
  margin-top: ${autoWidthVW(8)};
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
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(20)};
  > div:nth-child(3n + 1) {
    text-align: left;
  }
  > div:nth-child(3n + 2) {
    text-align: center;
  }
  > div:nth-child(3n + 3) {
    text-align: right;
  }
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
const PropertyContainer = styled(Row)`
  margin-top: ${autoWidthVW(20)};
  > div {
    text-align: center;
  }
`;
const PropertyBtn = styled(FlexViewCenter)`
  padding-left: ${autoWidthVW(10)};
  padding-right: ${autoWidthVW(10)};
  height: ${autoWidthVW(20)};
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(40, 233, 95, 1);
  color: rgba(56, 56, 56, 1);
  font-size: ${autoWidthVW(12)};
  line-height: 22px;
  cursor: pointer;
`;
const Flag = styled.div`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(10)};
`;
const FuncName = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: ${autoWidthVW(18)};
  line-height: ${autoWidthVW(30)};
  margin-top: ${autoWidthVW(20)};
  border-bottom: 1px solid rgba(166, 166, 166, 1);
`;
const FuncDesc = styled.div`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(16)};
  line-height: ${autoWidthVW(30)};
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
  margin-right: ${autoWidthVW(30)};
  cursor: pointer;
`;
const FuncInfo = styled(Row).attrs({
  align: 'middle',
})`
  margin-top: ${autoWidthVW(10)};
`;
const PriceLable = styled.span`
  color: rgba(128, 128, 128, 1);
  font-size: ${autoWidthVW(12)};
  line-height: ${autoWidthVW(22)};
  margin-right: ${autoWidthVW(5)};
`;
const Price = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: ${autoWidthVW(16)};
  line-height: ${autoWidthVW(22)};
`;
const FuncInput = styled(BaseInput)`
  width: ${autoWidthVW(120)};
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.25);
  font-size: ${autoWidthVW(16)};
  line-height: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(10)};
`;

export default ReactPreview;
