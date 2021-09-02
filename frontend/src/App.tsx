import React from 'react';
import styled from "styled-components";

import logo from './image/logo_new.png';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StartPage from './pages/customer/StartPage/View';
import SelectPage from "@pages/customer/SelectPage/View";
import SamplePage from '@pages/customer/SamplePage/View';

const Image = styled.img`
  height: 1.5rem;
  justify-content: center;
  margin: auto;
  vertical-align: middle;
`;

const Header = styled.div`
  width:100%;
  height: 3rem;
  background-color: #C4442A;
  text-align : center;
  line-height: 3rem;
`;

const Body= styled.div`
  //background-color:black;
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
                <Route path='/selectSample' component={SelectPage} exact={true} />
                <Route path='/userInfo' component={SamplePage} exact={true} />
            </Switch>
        </Body>
    </BrowserRouter>
  );
}

export default App;
