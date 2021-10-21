import './App.css';
import MainPage from "./components/MainPage";
import SelectInfoPage from './components/SelectInfoPage';
import RecommendPage from './components/RecommendPage';
import ExperiencePage from './components/ExperiencePage';
import ThanksPage from './components/ThanksPage';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;

function App() {
  return (
  
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={MainPage}/>
            <Route path='/selectInfo' component={SelectInfoPage}/>
            <Route path='/recommend' component={RecommendPage}/>
            <Route path='/thanks' component={ThanksPage}/>
            <Route path='/experience'  component={ExperiencePage}/>
          </Switch>
      </Router>
    
  );
}


export default App;
