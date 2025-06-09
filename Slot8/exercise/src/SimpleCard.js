import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

const SimpleCard = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card style={{ width: '700px', height: '200px' }} className="p-3">
        <Card.Body>
          <Row className="align-items-center h-100">
            
            <Col>
            <img
                src="/logo.jpg"
                alt="FPT Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
              
            </Col>

            <Col className="text-end">
              <Card.Title className="mb-1 fw-bold">Hoai Nguyen - FPT DaNang</Card.Title>
              <Card.Text>Mobile: 0982827763</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default SimpleCard;
