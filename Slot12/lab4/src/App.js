import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import QuizForm from './components/QuizForm';
import QuizDisplay from './components/QuizDisplay';
import { QuizProvider } from './components/QuizContext';

function App() {
  return (
    <QuizProvider>
      <Container className="py-5">
        <Row>
          <Col>
            <h1 className="mb-4">Ứng Dụng Quiz React</h1>
            <QuizForm />
            <QuizDisplay />
          </Col>
        </Row>
      </Container>
    </QuizProvider>
  );
}

export default App;