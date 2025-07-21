import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      <Row>
        {cart.map(item => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  ID: {item.id}<br />
                  Price: ${item.price}<br />
                  Catalogs: {item.catalogs.join(', ')}<br />
                  Quantity: {item.quantity}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {cart.length === 0 && <p>Your cart is empty.</p>}
    </Container>
  );
};

export default Cart;