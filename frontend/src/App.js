import Navbar from "./components/Navbar";
import pages from './page/index'
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom' ;
import styled from "styled-components";
import image from "./img/mainimg.png";
import { useEffect, useState } from "react";
import Background from "./components/Background";

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
  background-image : url(${image});
  background-size : cover;
  background-repeat : no-repeat;
  background-position : center;
`;

const Page = styled.div`
  width: calc(100% - 50px);
  min-height: calc(100vh - 105px);
  height: calc(100vh - 105px);
  padding: 0 25px 25px 25px;
  position: relative;
`;

const Nav = styled(Navbar)`
  height: 80px;
  width: 100%;
`;

function App() {
  return (
    <Router>
    <Background>
        <Nav />
        <Page>

          <Switch>
            <Route path='/' exact component={pages.MainPage}/>
            <Route path='/selectInfo' component={pages.SelectInfoPage}/>
            <Route path='/recommend' component={pages.RecommendPage}/>
            <Route path='/thanks' component={pages.ThanksPage}/>
            <Route path='/experience'  component={pages.ExperiencePage}/>
            <Route path='/information' component={pages.InformPage} />
          </Switch>

        </Page>
    </Background>
    </Router>
  );
}


export default App;
