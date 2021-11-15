import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 6.625rem;
    background-color: yellow;
    display: flex;
`;

const Picture = styled.div`
    display: inline-block;
    border-radius: 5px;
    width: 6.625rem;
    height: 6.625rem;
    background-color: #eee;
`;

const TextContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    top: 10px;
`;



const Text_1 = styled.div`
    width: 9rem;
    height: 0.625rem;
    background-color: #eee;
    border-radius: 2px;
    margin : auto auto 2% 4%;
`;

const Text_2 = styled.div`
    width: 9rem;
    height: 0.625rem;
    background-color: #eee;
    border-radius: 2px;
    margin : auto auto 4% 4%;
`;

const Text_3 = styled.div`
    width: 7.188rem;
    height: 0.813rem;
    background-color: #eee;
    border-radius: 2px;
    margin : auto auto 2% 4%;
`;

const Text_4 = styled.div`
    width: 10.938rem;
  height: 0.813rem;
  background-color: #eee;
  border-radius: 2px;
  margin : auto auto 4% 4%;
`;

const Texts = styled.div`
    
`;

function PlaceHolder(){
   return(
<Container>
    <Picture></Picture>
    <TextContainer>
        <Texts>
            <Text_1></Text_1>
            <Text_2></Text_2>
        </Texts>
        <Texts>
            <Text_3></Text_3>
            <Text_4></Text_4>
        </Texts>
        
    </TextContainer>
</Container>
   )        
}

export default PlaceHolder;