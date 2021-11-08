import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import "../components/SelectInfoPage.css";
import Dropdown from "../components/Dropdown.js";
import style from "../components/PageResource";
import styled from "styled-components";

const { Button, Footer, Header, Text } = style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Info2 = styled.div`
  text-align: left;
  padding: 1.8% 0 0 0;
`;

const Info3 = styled.div`
  text-align: left;
  padding: calc(35px + 8%) 0 1.8% 0;
`;

const TextGender = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: -0.13px;
`;

const GenderButton = styled.button`
  width: 9.375rem;
  height: 50px;
  border-radius: 5px;
  border: solid 0.5px #eaeaea;
  background-color: ${props => props.selected ? "#c4442a" : '#fff'};
  color: ${props => props.selected ? "#fff" : "#6a707e"};
  font-weight: bold;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function SelectInfoPage() {
  const [gender, setGender] = useState(undefined);

  useEffect(() => {}, [gender]);

  const [selected, setSelected] = useState("연령대");
  const history = useHistory();

  return (
    <Main>
      <Progressbar state={1} />
      <Header>꼭 맞는 샘플을<br/>추천해 드릴게요</Header>

      <Info2>
        <Text>
          택시 안 다양한 샘플 중<br />
          제일 적합한 제품을 알려드려요
        </Text>
      </Info2>

      <Info3>
        <TextGender>성별</TextGender>
      </Info3>
      <BtnContainer>
        <GenderButton
          onClick={() => setGender(true)}
          selected={gender === true}
        >
          남성
        </GenderButton>
        <GenderButton
          onClick={() => setGender(false)}
          selected={gender === false}
        >
          여성
        </GenderButton>
      </BtnContainer>

      <Dropdown selected={selected} setSelected={setSelected} />
      <Footer>
        <Button onClick={() => history.push('recommend')}>확인</Button>
      </Footer>
    </Main>
  );
}


export default SelectInfoPage;