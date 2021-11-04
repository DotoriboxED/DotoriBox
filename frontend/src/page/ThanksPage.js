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
  margin-bottom: 1rem;
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
  margin-bottom: 2.25rem;
  text-decoration: underline;
`;

const SampleImage = styled.div`
  display: block;
  margin: 6% auto 10% 0;
  width: 100%;
  height: 100%;
  max-width: 500px;
  position: relative;
`;

const Image = styled.img`
  width: 76.5%;
  height: 100%;
`;

const Gradient = styled.div`
  background: linear-gradient(transparent, 65%, black);
  width: 76.5%;
  height: 100%;
  border-radius: 3%;
  z-index: 2;
  position: absolute;
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
`;

const Manufactured = styled.div`
  color: white;
  position: absolute;
  bottom: 1.313rem;
  left: 1rem;
`

const ItemFor = styled.div`
  color: white;
  border: white solid 1px;
  font-size: 0.5rem;
  position: absolute;
  bottom: 1.313rem;
  right: 1rem;
  padding: 2px;
`

function ThanksPage(){
    return (
      <Main>
        <Header>감사합니다</Header>
        <Text>목적지 도착 후 안전한 하차 상황에서<br/>기사님께 말씀드리면, 샘플을 건네주실 거에요</Text>
        <SampleImage>
          <Gradient>
            <Manufactured>
              <h4>CJ 헬스케어</h4>
              <h2>컨디션 환 1포</h2>
            </Manufactured>
            <ItemFor>30대 남성 추천</ItemFor>
          </Gradient>
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