import React from 'react';
import styled from "styled-components";

import logo from './image/logo.png';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartPage from './pages/customer/StartPage/View';

const Image = styled.img`
  height: 3rem;
  justify-content: center;
  margin: auto;
`;

const Header = styled.div`
  width:100%;
  height: 3rem;
  background-color: #DC6E3F;
  text-align : center;
`;

const Body= styled.div`
  background-color:black;
  width:100%;
  height:calc(100vh - 3rem);
  text-align : center;
`;

function App() {
  return (
    <BrowserRouter>
        <Header>
            <Image src={logo} />
        </Header>
        <Body>
            <Switch>
                <Route path='/' component={StartPage} exact={true} />
            </Switch>
        </Body>
    </BrowserRouter>
  );
}

export default App;
