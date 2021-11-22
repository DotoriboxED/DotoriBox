import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';

const Info = styled.div`
  margin: 35px 0 35px 0;
`;

const Text = styled.p`
  font-size: 0.875rem;
  line-height: 2.14;
  letter-spacing: -0.14px;
`;

const Header = styled.h2`
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.563rem;
  font-weight: bolder;
`;

const Footer = styled.div`
  bottom: 4.75rem;
  position: absolute;
  flex: 1;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const InfoText = styled(Text)`
  margin-top: auto;
`;



function InformPage() {
  return (
    <Main>
      <Header>개인정보 수집 및 이용 동의</Header>
      <Info>
        <Text><b>개인정보의 수집·이용 목적</b></Text>
        <Text>이벤트 진행 및 경품 배송</Text>
      </Info>
      <Info>
        <Text><b>수집하는 개인정보의 항목</b></Text>
        <Text>휴대폰 번호</Text>
      </Info>
      <Info>
        <Text><b>개인정보의 보유·이용 기간</b></Text>
        <Text>할인쿠폰 발송 후 즉시 파기</Text>
      </Info>
      <Info>
        <Text><b>개인정보의 수집 및 이용에 대한 동의를 거부할 수 있으며 이 경우 이벤트 참여가 제한됩니다.</b></Text>
      </Info>
      <Footer>
        <InfoText>문의 : sjpark@pickdotori.com</InfoText>
      </Footer>
    </Main>
  )
}

export default InformPage;