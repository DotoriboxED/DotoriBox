import React from "react";
import styled from "styled-components";

const SampleImage = styled.div`
  display: block;
  margin: 6% auto 10% 0;
  width: 1vh;
  max-width: 500px;
  position: relative;
  min-width: 330px;
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
  bottom: 1.6rem;
  right: 1rem;
  padding: 2px;
`

const Card = ({ image, className }) => {
  return (
    <div className={className}>
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
    </div>
  )
}

export default Card;