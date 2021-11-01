import './App.css';
import Navbar from "./components/Navbar";

import pages from './page/index'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;

import styled from "styled-components";

const Main = styled.div`
  width: calc(100% - 50px);
  height: 100%;
  padding: 25px;
`;

const Nav = styled(Navbar)`
  height: 150px;
  width: 100%;
`;

function App() {
  return (

      <Router>
        <Nav />
        <Main>
          <Switch>
            <Route path='/' exact component={pages.MainPage}/>
            <Route path='/selectInfo' component={pages.SelectInfoPage}/>
            <Route path='/recommend' component={pages.RecommendPage}/>
            <Route path='/thanks' component={pages.ThanksPage}/>
            <Route path='/experience'  component={pages.ExperiencePage}/>
            <Route path='/information' component={pages.InformPage} />
          </Switch>
        </Main>
      </Router>
    
  );
}


export default App;
