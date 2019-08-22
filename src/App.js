import React from 'react';
import './App.css';
import { Route,
         Switch,
         BrowserRouter as Router} from 'react-router-dom';
import Login from './login';
import PersonalInfo from './personal-Info';
import Interests from './interests';
import Skills from './skills';
import SignUp from './signup';
import NotFound from './notfound';
import Home from './Home';
import Summary from './summary';

function App() {
  return (
    <Router>
      <Switch>
        <Route  path="/" exact component={ Home } />
        <Route  path="/login" exact component={ Login } />
        <Route  path="/personal-Info" exact component={ PersonalInfo } />
        <Route  path="/interests" exact component={ Interests } />
        <Route  path="/skills" exact component={ Skills } />
        <Route  path="/signup" exact component={ SignUp } />
        <Route  path="/summary" exact component={ Summary } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
