import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container className="mt-5">
    <h2>404 Not Found</h2>
    <p>The requested laptop was not found.</p>
    <Button variant="primary" as={Link} to="/laptops">Back to Laptop List</Button>
  </Container>
);

export default NotFound;