import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './App.css';

function Exercise7() {
  return (
    <div className="app">
      <Container>
        <h1 className="text-center my-4">Cards Columns Demo</h1>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 bg-primary p-3">
              <Card.Img variant="top" src="/images/car.jpg" />
              <Card.Body>
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 bg-warning p-3">
              <Card.Img variant="top" src="/images/car.jpg" />
              <Card.Body>
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 bg-danger p-3">
              <Card.Img variant="top" src="/images/car.jpg" />
              <Card.Body>
                <Card.Text>Some text inside the first card</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}
export default Exercise7;