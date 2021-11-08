import React from "react";
import styled from "styled-components";
import Color from 'color-thief-react';

import Image from '../img/Burger.jpg';


const Main = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  margin-bottom: 3vh;
`;

const Picture = styled.img`
`;

const MiniCard = () => {
  return (
    <Main>
      <Picture src={Image} />
      <Color src={Image} format='hex'>
        {({ data, loading, error }) => (
          <div style={{ 'background-color': data, width: '100%' }}>
            Blabla
          </div>
        )}
      </Color>
    </Main>
  )
}

export default MiniCard;