import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import style from "../components/PageResource";
import { TaxiAPI } from "../API";


const { Footer, InputData,  Button } = style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: url("../../src/img/mainimg.png");
`;

const Header = styled.div`
  font-size: 1.563rem;
  font-weight: bolder;
  padding: calc(35px + 8%) 0 1.8% 0;
  letter-spacing: -0.25px;
`;

const Info1 = styled.div`
  text-align: left;
`;

const Text1 = styled.p`
  font-size: 0.813rem;
  letter-spacing: -0.13px;
`;

const Info2 = styled(Info1)`
  margin-top: auto;
`;

const Text2_1 = styled.div`
  font-size: 0.938rem;
  letter-spacing: -0.15px;
`;
const Text2_2 = styled.div`
  font-size: 0.813rem;
  letter-spacing: -0.13px;
  margin: 5% 0 5% 0;
`;
const ButtonStart = styled(Button)`
  margin: 15% 0 0 0;
  background-color : ${props => props.BColor};
`;

function MainPage() {
  const history = useHistory();
  const [code, setCode] = useState();
  const [check, setCheck] = useState(undefined);
  const [taxiId, setTaxiId] = useState();

  const onTextChange = (e) => {
    setCode(e.target.value);
    console.log(e.target.value);
    if (e.target.value.length === 5 && e.target.value.length < 6) {
      TaxiAPI.findOne(parseInt(e.target.value)).then(result => {
        setCheck(true);
        setTaxiId(result.data.id);
      }).catch(err => setCheck(false));
    }
    if(e.target.value.length===0 || e.target.value.length >= 6 ){
      setCheck(undefined);
    }
  }

  const onStart = () => {
    if(check){
      history.push({ pathname: '/selectInfo', state: { code, taxiId } });
    }
      
  }

  return (
    <Main>
      <Header>
        새로운 택시경험
        <br />
        도토리박스와 함께
      </Header>
      <Info1>
        <Text1>
          새로운 상품을 무료로 체험해보세요
          <br />
          숙취해소제, 초콜릿, 등 다양한 무료샘플
        </Text1>
      </Info1>
      <Footer>
        <Info2>
          <Text2_1>
            <b>고유번호를 입력해주세요</b>
          </Text2_1>
          <Text2_2>운전석과 조수석 사이 설치된 도토리박스에 적혀있어요</Text2_2>
        </Info2>
        <InputData white={true} onChange={onTextChange} checkIcon={check}/>
        <ButtonStart onClick={() => onStart()} BColor={check?"#c4442a":"#707070"}>시작하기</ButtonStart>
      </Footer>
    </Main>
  );
}

export default MainPage;
