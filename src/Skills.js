import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Skills() {
    return(
        <div>
            <ProgressBar now={75} />
            <h1>Skills you offer</h1>
            <Form>
        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Gardening"
                name="formHorizontalRadios"
                id="formHorizontalRadios7"
              />
              <Form.Check
                type="radio"
                label="Philosophy"
                name="formHorizontalRadios"
                id="formHorizontalRadios8"
              />
              <Form.Check
                type="radio"
                label="History & Literature"
                name="formHorizontalRadios"
                id="formHorizontalRadios9"
              />
              <Form.Check
                type="radio"
                label="Cooking"
                name="formHorizontalRadios"
                id="formHorizontalRadios10"
              />
              <Form.Check
                type="radio"
                label="Creative Writing"
                name="formHorizontalRadios"
                id="formHorizontalRadios11"
              />
              <Form.Check
                type="radio"
                label="Painting"
                name="formHorizontalRadios"
                id="formHorizontalRadios12"
              />
            </Col>
          </Form.Group>
        </fieldset>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Go to Summary</Button>
          </Col>
        </Form.Group>
      </Form>
        </div>
    )
}

export default Skills;