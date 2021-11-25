import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Style from "../components/PageResource";
import Progressbar from "../components/Progressbar";
import MiniCard from "../components/MiniCard";
import Card from "../components/Card";
import { useHistory, useLocation } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi';
import {SampleAPI} from '../API';

const { Header, Button } = Style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MiniHeader = styled(Header)`
  font-size: 1rem;
  padding-bottom: 0.625rem;
  margin-bottom: -0.4rem;
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

const ViewInfo = styled.div`
  border: #c4442a 2px solid;
  border-radius: 8px;
  color: #c4442a;
  font-weight: 540;
  font-size: 0.7rem;
  width: fit-content;
  padding: 1px 3px 1px 2px;
  display: flex;
`;

const SampleCard = styled(Card)`
  margin: 0;
  position: fixed;
  top: 12rem;
`;

const SearchIcon = styled(BiSearchAlt2)`
  color: #c4442a;
  margin: auto;
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  z-index: 1002;
`;

function ExperiencePage() {
  const location = useLocation();
  const history = useHistory();
  const { sampleId, taxiId, customerId } = location.state;
  const [sample, setSample] = useState({ sampleInfo: {} });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    SampleAPI.getSample(sampleId).then(res => {
      setSample(res.data);
    });
  }, []);

  const onClickBtn = () => {
    history.push({ pathname: '/thanks', state: { sampleId, taxiId, customerId } });
  }

  return (
    <Main>
      <Progressbar state={3} />
      {
        sample.sampleInfo && <>
          <MiniHeader>{sample.sampleInfo.manufacture}</MiniHeader>
          <Header>{sample.sampleInfo.name} 체험하기</Header>
          <ViewInfo onClick={() => setIsOpen(true)}><SearchIcon/>제품 확인</ViewInfo>
          {
            isOpen &&
            <div>
              <SampleCard
                  image={sample.image}
                  manufacture={sample.sampleInfo.manufacture}
                  name={sample.sampleInfo.name}
                  target={sample.sampleTargets}
                  stock={1}
              />
              <CardBackground onClick={() => setIsOpen(false)} />
            </div>
          }
          <InfoTable>
            <tbody>
            <InfoTableRow>
              <InfoTitle>제품명</InfoTitle>
              <InfoContent>{sample.sampleInfo.name}</InfoContent>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>식품의 유형</InfoTitle>
              <InfoContent>{sample.sampleInfo.sampleType}</InfoContent>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>섭취 방법</InfoTitle>
              <InfoContent>{sample.sampleInfo.method}</InfoContent>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>주성분 및 함량</InfoTitle>
              <InfoContent>{sample.sampleInfo.nutrient}</InfoContent>
            </InfoTableRow>
            </tbody>
          </InfoTable>
        </>
      }
      <Footer>
        <Notice>
          📢 마지막으로,<br/>
          탑승하신 택시에 해당 샘플이 있는지 확인해주세요
        </Notice>

        <SubmitButton onClick={() => onClickBtn()}>확인 후 가져가기</SubmitButton>
      </Footer>
    </Main>
  );
}

export default ExperiencePage;