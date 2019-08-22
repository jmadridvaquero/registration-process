import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { NavLink, withRouter, Redirect } from 'react-router-dom';


function PersonalInfo(props) {

  // const redirect = withRouter(
  //   <Redirect to="/PersonalInfo" />
  // )

  function submitForm(e) {
    e.preventDefault()
    props.history.push('/interests');
    // redirect();
  }

  return(
    <div className="container-fluid">
      <ProgressBar now={25} />
      <h1 className="text-center">Personal Info</h1>
      <Form onSubmit={ submitForm} >
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="John" required />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Smith" />
        </Form.Group>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" required />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" required />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} >
            <Form.Label>City</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select">
              <option>Choose...</option>
              <option>...</option>
            </Form.Control >
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="I hereby certify the information provided is accurate" />
        </Form.Group>

  <Button variant="primary" type="submit">
          Go to interests
        </Button>
        <NavLink to="/Login"> Go to Login </NavLink>
        <NavLink to="/Interests"> Go to Interests </NavLink>
      </Form>
    </div>
  )
}

export default PersonalInfo;