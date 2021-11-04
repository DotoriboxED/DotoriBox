import React from "react";
import styled from "styled-components";
import style from '../components/PageResource';
import image from '../img/TestSampleImg.png'

const { Text, InputData, Footer, Button } = style;

const Header = styled.h2`
  padding-bottom: 10px;
  margin-top: 0;
  font-size: 1.563rem;
  font-weight: bolder;
`;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SampleText = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: -0.12px;
  color: #c4442a;
  margin-top: auto;
`;

const TicketText = styled.div`
  font-family: SpoqaHanSansNeo;
  font-size: 0.938rem;
  font-weight: bold;
  letter-spacing: -0.15px;
`;

const InfoText = styled.div`
  font-family: SpoqaHanSansNeo;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: -0.11px;
  text-align: center;
  color: #bcb9b9;
  margin-top: 1.594rem;
  text-decoration: underline;
`;

const SampleImage = styled.div`
  display: block;
  margin: 3.8% auto 5.5% 0;
  width: 100%;
  height: 100%;
  max-width: 500px;
`;

const Image = styled.img`
  width: 76.5%;
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
`;

function ThanksPage(){
    return (
      <Main>
        <Header>감사합니다</Header>
        <Text>목적지 도착 후 안전한 하차 상황에서<br/>기사님께 말씀드리면, 샘플을 건네주실 거에요</Text>
        <SampleImage>
          <Image src={image} />
        </SampleImage>
          <Footer>
            <SampleText>📣 체험한 샘플을 최대 80% 저렴하게 구매하는 방법</SampleText>
            <TicketText>온라인 할인쿠폰을 보내드립니다</TicketText>
            <InputData />
            <SubmitButton>할인쿠폰 받기</SubmitButton>
            <InfoText>휴대폰 번호 및 개인정보 수집, 이용에 동의합니다.</InfoText>
          </Footer>
      </Main>
    )
}

export default ThanksPage;