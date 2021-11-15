import React, { useEffect, useState } from "react";
import style from '../components/PageResource';
import Card from "../components/Card";
import styled from "styled-components";
import MiniCard from "../components/MiniCard";
import Progress from "../components/Progressbar";
import PlaceHolder from "../components/PlaceHolder";
import image from '../img/TestSampleImg.png'
import {TaxiAPI} from '../API';
import { useLocation } from "react-router-dom";

const { Header, Text } = style;

const Main = styled.div`
  
`;

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: scroll;
  width: calc(100% + 50px);
  z-index: 1;
  margin: 10% -25px 10% -25px;
;
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


function RecommendPage (){
  const [samples, setSamples] = useState([]);
  const location = useLocation();

  const { age, isMale } = location.state;

  useEffect(() => {
    TaxiAPI.findTaxiSample(1, { age, isMale }).then(res => {
      setSamples(res.data);
    });
  },[]);

  useEffect(() => {
    console.log(samples);
  }, [samples])

    return(
        <Main>
          <Progress state={2} />
          <Header>추천 샘플</Header>
          <Text>
            승객분들의 성별, 연령대, 시간에 맞는<br/> 샘플을 추천드려요<br/>
            원하시는 샘플을 클릭해주세요
          </Text>
          <Container>
            {
              samples.length !== 0 && <FirstCard
                image={samples[0].sample.image}
                manufacture={samples[0].sample.sampleInfo.manufacture}
                name={samples[0].sample.sampleInfo.name}
                target={
                  `
                  ${!samples[0].sample.sampleTarget.age ? '전연령' : samples[0].sample.sampleTarget.age}대
                    ${samples[0].sample.sampleTarget.isMale === null &&
                    samples[0].sample.sampleTarget.isMale? '남성': '여성'
                  }
                  `
                }
              />
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
    )
}

export default RecommendPage;