import React from "react";
import styled from "styled-components";
import mostans from "../img/mostans.jpeg";

const Container = styled.div`
    width: 100%;
    height: 8.063rem;
    display: flex;
    align-items: center; 
    background-color: ${props => parseInt(props.length)%2===1 ?   'rgba(238, 238, 238, 0.42)' : '#fff' };
    width: calc(100% + 50px);
    margin: 12px -25px 9px -25px;
`;

const Picture = styled.div`
    display: inline-block;
    border-radius: 5px;
    width: 6.625rem;
    height: 6.625rem;
    margin-left: 25px;
    background-image : url(${mostans});
    background-size : cover;
    background-repeat : no-repeat;
    background-position : center;
`;


const TextContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    top: 10px;
    left: 10px;
`;

const Text_1 = styled.div`
    font-weight: bolder;
    height: 0.625rem;
    border-radius: 2px;
    margin : 2% auto 5% 4%;
    font-size: 0.688rem;
    line-height: 0.875rem;
    letter-spacing: -0.11px;
`;

const Text_2 = styled.div`
 
    font-size: 0.688rem;
    line-height: 0.875rem;
    letter-spacing: -0.11px;
    height: 0.625rem;
    border-radius: 2px;
    margin : 2% auto 5% 4%;
`;


const Text_3 = styled.div`
    font-weight: bolder;
    font-size: 0.983rem;
    width: 10.938rem;
    height: 0.813rem;
    border-radius: 2px;
    margin : auto auto 5% 4%;
`;

const Texts = styled.div`
    margin : 5px 0 5px 0;
`;

function PlaceHolderMos({ length }){
   return(
<Container length={length} >
    <Picture></Picture>
    <TextContainer>
        <Texts>
            <Text_1>와디즈 100만 펀딩 신화!</Text_1>
            <Text_2>모발 최강조합! 입소문 난 환스틱</Text_2>
        </Texts>
        <Texts>
            <Text_3>모스탄스 지금 체험하기 </Text_3>
        </Texts>
    </TextContainer>
</Container>
   )        
}

export default PlaceHolderMos;