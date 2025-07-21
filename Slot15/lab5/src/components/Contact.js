import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: '',
    zip: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    username: 'Please choose a username',
    city: 'Please provide a valid city',
    state: 'Please provide a valid state',
    zip: 'Please provide a valid zip',
    agreeTerms: 'You must agree to terms and conditions before submitting',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });


    if (name !== 'agreeTerms' || (name === 'agreeTerms' && checked)) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Please choose a username';
    if (!formData.city) newErrors.city = 'Please provide a valid city';
    if (!formData.state) newErrors.state = 'Please provide a valid state';
    if (!formData.zip) newErrors.zip = 'Please provide a valid zip';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions before submitting';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Home About News Quiz Contact</a>
      </nav>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            isValid={formData.firstName}
          />
          {formData.firstName && <div style={{ color: 'green' }}>Looks good!</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            isValid={formData.lastName}
          />
          {formData.lastName && <div style={{ color: 'green' }}>Looks good!</div>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>

        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                as="select"
                name="state"
                value={formData.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              >
                <option value="">Select a state</option>
                {/* Add state options here */}
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col">
            <Form.Group className="mb-3" controlId="formZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />
              <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="formTerms">
          <Form.Check
            type="checkbox"
            name="agreeTerms"
            label="Agree to terms and conditions"
            checked={formData.agreeTerms}
            onChange={handleChange}
            isInvalid={!!errors.agreeTerms}
          />
          <Form.Control.Feedback type="invalid">{errors.agreeTerms}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit form
        </Button>
      </Form>
    </div>
  );
};

export default Contact;