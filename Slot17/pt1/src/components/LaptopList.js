import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/Laptops')
      .then((res) => {
        setLaptops(res.data);
        setFilteredLaptops(res.data);
      })
      .catch((err) => console.error('Error fetching laptops', err));
  }, []);

  const handleSearch = () => {
    const filtered = laptops.filter((laptop) =>
      (laptop.brand + ' ' + laptop.model).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredLaptops(filtered);
  };

  return (
    <Container className="mt-5">
      <h2>Laptop Management</h2>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
          Search
        </Button>
      </InputGroup>
      <Row xs={1} md={4} className="g-4">
        {filteredLaptops.map((laptop) => (
          <Col key={laptop.id}>
            <Card className="h-100"> 
              <Card.Img 
                variant="top" 
                src={laptop.image} 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column"> 
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>
                  Year: {laptop.year}<br />
                  Price: {laptop.price}
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => navigate(`/laptops/${laptop.id}`)} 
                  className="mt-auto" 
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

LaptopList.propTypes = {};

export default LaptopList;