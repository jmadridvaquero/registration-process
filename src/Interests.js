import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function Interests(props) {

  function submitForm(e) {
    e.preventDefault()
    props.history.push('/skills');
    
  }

  return(
    <div className="container-fluid">
      <ProgressBar now={50} />
        <h1>Interests (you want to learn)</h1>
        <Form onSubmit={ submitForm} >
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Internet search"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Pay bills"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Manage e-mail"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
              <Form.Check
                type="radio"
                label="Flight deals"
                name="formHorizontalRadios"
                id="formHorizontalRadios4"
              />
              <Form.Check
                type="radio"
                label="Modern music"
                name="formHorizontalRadios"
                id="formHorizontalRadios5"
              />
              <Form.Check
                type="radio"
                label="Find computer tools"
                name="formHorizontalRadios"
                id="formHorizontalRadios6"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Go to Skills</Button>
          </Col>
        </Form.Group>
        <NavLink to="/Skills"> Go to Skills </NavLink>
      </Form>
    </div>
  )
}

export default Interests;