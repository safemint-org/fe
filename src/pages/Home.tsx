import ImageCommon from '@/assets/common';
import { autoWidthVW } from '@/utils/utils';
import { Button, Image } from 'antd';
import styled from 'styled-components';
import styles from './Home.less';

function home() {
  return (
    // <Row style={{background:"#fff"}}>
    //   <Col>
    //     <ImageBackground>
    //       <Image preview={false} width={autoWidthVW(50)} src={ImageCommon.homeTop} />
    //       <Image preview={false} width={'70%'} src={ImageCommon.home_icon} />
    //     </ImageBackground>
    //     <Image preview={false} width={'40%'} src={ImageCommon.home_text} />
    //     <TextTip>Fully audited by professionals </TextTip>

    //     <Button className={styles.enterButtonStyle} style={{ color: '#fff' }}>
    //       Enter App
    //     </Button>
    //   </Col>
    // </Row>
    <Container>
      <ImageBackground>
        <Image preview={false} width={autoWidthVW(50)} src={ImageCommon.homeTop} />
        <Image preview={false} width={'70%'} src={ImageCommon.home_icon} />
      </ImageBackground>
      <Image preview={false} width={'40%'} src={ImageCommon.home_text} />
      <TextTip>Fully audited by professionals </TextTip>

      <Button className={styles.enterButtonStyle} style={{ color: '#fff' }}>
        Enter App
      </Button>
    </Container>
  );
}

// const Container = styled.div`
//   background: '#ffffff';
//   padding: ${autoWidthVW(40)};
// `;
const Container = styled.div`
  /* background: #ffffff; */
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 5%;
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  padding-top: 2%;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

const TextTip = styled.div`
  color: rgba(112, 112, 112, 1);
  font-size: ${autoWidthVW(24)};
  line-height: ${autoWidthVW(30)};
`;

export default home;
