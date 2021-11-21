import React, { useEffect, useState } from "react";
import style from "../components/PageResource";
import Card from "../components/Card";
import styled from "styled-components";
import MiniCard from "../components/MiniCard";
import Progress from "../components/Progressbar";
import PlaceHolder from "../components/PlaceHolder";
import image from "../img/TestSampleImg.png";
import { TaxiAPI, CustomerAPI } from "../API";
import { useHistory, useLocation } from "react-router-dom";

const { Header, Text } = style;

const Main = styled.div``;

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: scroll;
  width: calc(100% + 50px);
  z-index: 1;
  margin: 0 -25px 0 -25px; ;
`;

const SampleCard = styled(Card)`
  margin: 0 -33px 0 -33px;
`;

const FirstCard = styled(Card)`
  margin: 0 -33px 0 25px;
`;

const MiniCards = styled.div`
  margin-top: 3vh;
`;

function RecommendPage() {
  const [samples, setSamples] = useState([]);
  const location = useLocation();

  const { age, isMale, taxiId } = location.state;

  useEffect(() => {
    TaxiAPI.findTaxiSample(taxiId, { age, isMale }).then((res) => {
      setSamples(res.data);
    });
  }, []);

  const history = useHistory();

  const onClick = async (sampleId, stocks) => {
    if (stocks > 0) {
      CustomerAPI.createCustomer(
        { isMale, age, taxiId, sampleId },
        { taxiId, sampleId }
      ).then((res) => {
        history.push({
          pathname: "/Experience",
          state: { sampleId, taxiId, customerId: res.data.id },
        });
      });
    }
  };

  return (
    <Main>
      <Progress state={2} />
      <Header>추천 샘플</Header>
      <Text>
        승객분들의 성별, 연령대, 시간에 맞는
        <br /> 샘플을 추천드려요
        <br />
        원하시는 샘플을 클릭해주세요
      </Text>
      <Container>
        {
          <>
            {samples.length !== 0 && samples.length !== 0 && (
              <FirstCard
                onClick={() => onClick(samples[0].id, samples[0].stock)}
                sampleId={samples[0].id}
                image={samples[0].sample.image}
                manufacture={samples[0].sample.sampleInfo.manufacture}
                name={samples[0].sample.sampleInfo.name}
                target={samples[0].sample.sampleTargets}
                stock={samples[0].stock}
              />
            )}
            {samples.slice(1, samples.length).map((elem) => {
              return (
                <SampleCard
                  onClick={() => onClick(elem.id, elem.stock)}
                  sampleId={elem.id}
                  image={elem.sample.image}
                  manufacture={elem.sample.sampleInfo.manufacture}
                  name={elem.sample.sampleInfo.name}
                  target={elem.sample.sampleTargets}
                  stock={elem.stock}
                />
              );
            })}
          </>
        }
        {/*<FirstCard image={image} />*/}
        {/*<SampleCard image={image} />*/}
        {/*<SampleCard image={image} />*/}
        {/*<SampleCard image={image} />*/}
      </Container>
      <Header>모든 샘플</Header>
      <Text>택시에 있는 모든 종류의 샘플을 보여드려요</Text>
      {/* <MiniCards>
            <MiniCard />
            <MiniCard />
          </MiniCards> */}
      <PlaceHolder></PlaceHolder>
    </Main>
  );
}

export default RecommendPage;