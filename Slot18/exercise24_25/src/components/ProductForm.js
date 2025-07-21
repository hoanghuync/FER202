import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import { addProduct } from '../actions';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [catalogs, setCatalogs] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({
      name,
      price: parseFloat(price),
      description,
      catalogs: catalogs.split(',').map(c => c.trim())
    }));
    setName('');
    setPrice('');
    setDescription('');
    setCatalogs('');
  };

  return (
    <Container>
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Catalogs (comma separated)</Form.Label>
          <Form.Control type="text" value={catalogs} onChange={(e) => setCatalogs(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">Add Product</Button>
      </Form>
    </Container>
  );
};

export default ProductForm; 