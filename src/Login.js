import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { Route,
  Redirect,
  withRouter,
  BrowserRouter as Router} from 'react-router-dom';
  import PersonalInfo from './personal-Info' 
  
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 500); // fake async
      
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 500);
    },
  };
  
 
  
  class Login extends Component {
    state = { redirectToReferrer: false };
  
    login = (event) => {
      event.preventDefault();
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });

      });
    };
  
    render() {

      if (this.state.redirectToReferrer){
        return (<Redirect to='/personal-Info' />  ) 
      }

      return (
        <div className="container-fluid">
          <h3>You must log in to complete your registration process</h3>
          <Form onSubmit= {this.login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword" required>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </Form>
        </div>
      );
    }
  }
  
  export default  Login;
  