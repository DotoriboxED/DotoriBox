import React from "react";
import styled from "styled-components";

const SampleImage = styled.div`
  display: block;
  margin: 6% auto 10% 0;
  width: 1vw;
  height: 48vh;
  max-width: 500px;
  position: relative;
  min-width: 330px;
  min-height: 360px;
`;

const Image = styled.img`
  width: 76.5%;
  height: 100%;
  -webkit-filter: grayscale(${(props) => (props.stock > 0 ? "0%" : "100%")});
  border-radius: 3%;
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
  bottom: 2.7rem;
  left: 1rem;
  text-decoration: ${(props) => (props.stock > 0 ? "none" : "line-through")};
`;

const ItemFor = styled.div`
  color: white;
  border: white solid 1px;
  font-size: 0.5rem;
  position: absolute;
  padding: 2px;
  margin-top: 4px;
`;

const Card = ({
  image,
  manufacture,
  name,
  target,
  onClick,
  className,
  stock,
}) => {
  const targetText = () => {
    target.sort((a, b) => {
      return a.age - b.age;
    })

    const age = target.length === 1 ? target[0].age : `${target[0].age} ~ ${target[target.length - 1].age}`;

    return (
      <>
        {!target[0].age ? "전연령" : age}대
        {target[0].isMale === null
          ? ""
          : target[0].isMale
            ? "남성"
            : "여성"}{" "}
        추천
      </>
    )
  }

  return (
    <div className={className} onClick={onClick}>
      <SampleImage>
        <Gradient>
          <Manufactured stock={stock}>
            <h4>{manufacture}</h4>
            <h2>{name}</h2>
            <ItemFor>
              {targetText()}
            </ItemFor>
          </Manufactured>
        </Gradient>
        <Image src={image} stock={stock} />
      </SampleImage>
    </div>
  );
};

export default Card;