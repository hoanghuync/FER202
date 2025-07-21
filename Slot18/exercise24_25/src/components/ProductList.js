import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { addToCart, updateCartItem, removeFromCart } from '../actions';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Product List</h2>
      <Row>
        {products.map(product => {
          const cartItem = cart.find(item => item.id === product.id);
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <Col md={4} key={product.id} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    Price: ${product.price}<br />
                    Description: {product.description}<br />
                    Catalogs: {product.catalogs.join(', ')}
                  </Card.Text>
                  <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
                    Add to Cart
                  </Button>
                  {quantity > 0 && (
                    <>
                      <Button variant="warning" onClick={() => dispatch(updateCartItem(product.id, quantity + 1))} className="mx-2">
                        Update (+1)
                      </Button>
                      <Button variant="danger" onClick={() => dispatch(removeFromCart(product.id))}>
                        Delete from Cart
                      </Button>
                      <p>Quantity in Cart: {quantity}</p>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductList;