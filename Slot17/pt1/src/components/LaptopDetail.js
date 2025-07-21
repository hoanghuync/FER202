import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => setLaptop(res.data))
      .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  if (!laptop) return <Container className="mt-5"><h2>Loading...</h2></Container>;

  return (
    <Container className="mt-5">
      <h2>Laptop Details</h2>
      <Card>
        <Card.Img 
          variant="top" 
          src={laptop.image} 
          style={{ maxHeight: '300px', objectFit: 'contain' }}  
        />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>
            Year: {laptop.year}<br />
            Price: {laptop.price}<br />
            Description: A high-performance laptop suitable for professional use.
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate('/laptops')}>
            Back
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LaptopDetail;