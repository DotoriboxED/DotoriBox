import styled from "styled-components";

const Header = styled.h2`
  padding-bottom: 10px;
  font-size: 1.563rem;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 100%;
  height: 2.875rem;
  font-size: 0.75rem;
  border-radius: 5px;
  border: 0;
  background-color: #c4442a;
  color: #fff;
  bottom: 1.875rem;
  font-weight: 550;
  margin-top: auto;
`;

const Text = styled.p`
  font-family: SpoqaHanSansNeo;
  font-size: 0.813rem;
  line-height: 1.92;
  color: #6a707e;
  font-weight: normal;
`;

const Input = styled.input`
  background-color:transparent;
  padding: 0;
  border : 0;
  width: 100%;
  height: 2rem;
`;

const Horizon = styled.hr`
  width: 100%;
  color: #afabab;
`;

const Footer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputData = () => {
  return (
    <>
      <Input type="text"/>
      <Horizon />
    </>
  )
}

const Style = { Header, Button, Text, InputData, Footer }

export default Style;