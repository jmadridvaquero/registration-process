import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Route,
  Redirect,
  Link, 
  withRouter,
  BrowserRouter as Router} from 'react-router-dom';


  function AuthExample() {
    return (
      <Router>
        <div>
          <AuthButton />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
  
  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 500); // fake async
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 500);
    }
  };
  
  const AuthButton = withRouter(
    ({ history }) =>
      fakeAuth.isAuthenticated ? (
        <p className="text-center">
          Welcome, you're signed in !
          <Link to="/PersonalInfo">Start Registration</Link>
          <button
            onClick={() => {
              fakeAuth.signout(() => history.push("/PersonalInfo"));
            }}
          >
            Start Registration
          </button>
        </p>
      ) : (
        <p></p>
      )
  );
  
  // function PrivateRoute({ component: Component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         fakeAuth.isAuthenticated ? (
  //           <Component {...props} />
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: { from: props.location }
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }
 

  
  class Login extends Component {
    state = { redirectToReferrer: false };
  
    login = (event) => {
      event.preventDefault();
      fakeAuth.authenticate(() => {
        this.setState({ redirectToReferrer: true });
      });
    };
  
    render() {
      let { from } = this.props.location.state || { from: { pathname: "/" } };
      let { redirectToReferrer } = this.state;
  
      if (redirectToReferrer) return <Redirect to={from} />;
  
      return (
        <div className="container-fluid">
          <h3>You must log in to complete your registration process</h3>
          <Form onSubmit= {this.login}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
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
  
  export default AuthExample;
  