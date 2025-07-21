import React, { useReducer } from 'react';
import { Button, Container } from 'react-bootstrap';

const initialState = 0;
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <Container className="text-center mt-4">
      <h2>Counter: {count}</h2>
      <div className="mb-3">
        <Button variant="primary" onClick={() => dispatch({ type: 'increment' })} className="me-2">+</Button>
        <Button variant="danger" onClick={() => dispatch({ type: 'decrement' })} className="me-2">-</Button>
        <Button variant="secondary" onClick={() => dispatch({ type: 'reset' })}>Reset</Button>
      </div>
    </Container>
  );
}

export default Counter;