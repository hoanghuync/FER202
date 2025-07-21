import React, { useReducer } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

const initialState = {
  name: '',
  age: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setAge':
      return { ...state, age: action.payload };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="mt-4 text-center">
      <h2>Change Name and Age</h2>
      <Row className="justify-content-center">
        <Col md={4}>
          <Form.Group controlId="formName">
            <Form.Label className="fw-bold">Name:</Form.Label>
            <Form.Control
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group controlId="formAge" className="mt-3">
            <Form.Label className="fw-bold">Age:</Form.Label>
            <Form.Control
              type="number"
              value={state.age}
              onChange={(e) => dispatch({ type: 'setAge', payload: e.target.value })}
              placeholder="Enter age"
            />
          </Form.Group>

          <div className="mt-4">
            <h5>Name: <span className="text-primary">{state.name}</span></h5>
            <h5>Age: <span className="text-success">{state.age}</span></h5>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeNameAge;