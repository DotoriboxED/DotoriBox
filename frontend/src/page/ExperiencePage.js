import React from "react";
import styled from "styled-components";
import Style from "../components/PageResource";
import Progressbar from "../components/Progressbar";

const { Header, Button } = Style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const InfoTable = styled.table`
  display: table;
  width: 100%;
  table-layout: fixed;
  word-break: break-all;
  border-spacing: 0 2.125rem;
`;

const Notice = styled.div`
  width: 100%;
  text-align: center;
  margin: auto auto 0 auto;
  bottom: 6rem;
  font-size: 0.813rem;
  color: #6a707e;
`;

const InfoTableRow = styled.tr`
  width: 50%;
`;

const InfoContent = styled.td`
  font-size: 0.75rem;
  font-weight: 400;
`;

const InfoTitle = styled(InfoContent)`
  font-weight: 1000;
`;

const Footer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  margin-top: 1.188rem;
`;

function ExperiencePage() {
  return (
    <Main>
      <Progressbar state={3} />
      <Header>체험하기</Header>
      <hr/>
      <InfoTable>
        <tbody>
        <InfoTableRow>
          <InfoTitle>제품명</InfoTitle>
          <InfoContent>컨디션 환</InfoContent>
        </InfoTableRow>
        <InfoTableRow>
          <InfoTitle>식품의 유형</InfoTitle>
          <InfoContent>기타가공품</InfoContent>
        </InfoTableRow>
        <InfoTableRow>
          <InfoTitle>섭취 방법</InfoTitle>
          <InfoContent>음주 전 컨디션과 함께 드시고<br/>음주 후 하나 더 드시면 좋습니다</InfoContent>
        </InfoTableRow>
        <InfoTableRow>
          <InfoTitle>주성분 및 함량</InfoTitle>
          <InfoContent>헛개나무열매복합농축액, 새싹보리분말(새싹보리:국산) 등</InfoContent>
        </InfoTableRow>
        </tbody>
      </InfoTable>
      <Footer>
        <Notice>
          📢 마지막으로,<br/>
          탑승하신 택시에 해당 샘플이 있는지 확인해주세요
        </Notice>

        <SubmitButton>확인 후 가져가기</SubmitButton>
      </Footer>
    </Main>
  );
}

export default ExperiencePage;