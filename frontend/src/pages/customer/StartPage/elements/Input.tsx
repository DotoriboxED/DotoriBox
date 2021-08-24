import React from "react";
import styled from "styled-components";

const Upper= styled.div`
  width:100%;
  height:30%;
  justify-content: center;
  margin:auto;
  text-align: left;
`

const Title1=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 2.1rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.49;
  letter-spacing: 0.53px;
  text-align: left;
  color: #ffffff;
  margin: 0 0 0 1rem;
  padding-top:4rem;

`
const Title2=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.9rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.07px;
  text-align: left;
  color: #ffffff;
  padding-top:0.5rem;
  margin: 0 1em 0 1em;

`

const Title3=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.7rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.07px;
  text-align: left;
  color: #ffffff;
  padding-top:0.5rem;
  margin: 0em 1em 2em 1.45em;
`;

const Tag=styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.7rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
  text-align: left;
  color: #a3a0a0;
  margin:0 0 0 1rem;
  padding-top:2rem;
  padding-bottom:0.5rem;
`;

const Input=styled.input`
  margin: 1rem 0 0 1rem;
  text-align: left;
  width: 20%;
  height: 2rem;
  font-size: 0.8rem;
  padding: 0.5rem 9.25rem 0.313rem 0.5rem;
  border: solid 0.5px #a3a0a0;
  background-color:transparent;
  color:#e7713f;
`;

const Button=styled.button`
  width: 5rem;
  height: 2rem;
  margin: 2rem 7.938rem 0.281rem 1rem;
  background-color: #ffffff;
  font-family: SpoqaHanSansNeo;
  font-size: 0.313rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.05px;
`;

const Hr=styled.hr`
  width: 90%;
  border-color: #a3a0a0;
  margin: 1em;
`;

function InputComponent() {
    return (
        <Upper>
            <Title1>dotoribox</Title1>
            <Title3>도토리박스와 함께 새로운 택시를 경험하세요</Title3>
            <Hr />
            <Title2>샘플 선택을 위한 웹페이지입니다<br/>제공되는 샘플은 안전하게 한번 더 포장되어 있습니다</Title2>
            <Tag>QR코드 위 5자리 숫자를 입력해주세요</Tag>
            <Input
                placeholder="CODE"
            />
            <Button>Enter</Button>
        </Upper>
    )
}

export default InputComponent;