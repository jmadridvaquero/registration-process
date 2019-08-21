import React from 'react';
import './App.css';
import { Route,
         Switch,
         BrowserRouter as Router} from 'react-router-dom';
import Login from './Login';
import PersonalInfo from './PersonalInfo';
import Interests from './Interests';
import Skills from './Skills';
import SignUp from './SignUp';
import NotFound from './notfound';
import Home from './Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/login" exact component={ Login } />
        <Route path="/PersonalInfo" exact component={ PersonalInfo } />
        <Route path="/Interests" exact component={ Interests } />
        <Route path="/Skills" exact component={ Skills } />
        <Route path="/Signup" exact component={ SignUp } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
