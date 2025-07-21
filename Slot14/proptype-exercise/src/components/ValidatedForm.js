import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

function ValidatedForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', age: '', email: '', phone: '', agree: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Tên không được rỗng';
    else if (form.name.length < 3 || form.name.length > 50) errs.name = 'Tên phải từ 3-50 ký tự';

    const ageNum = parseInt(form.age);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) errs.age = 'Tuổi phải từ 18 đến 100';

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email không hợp lệ';
    if (!/^[0-9]{10,15}$/.test(form.phone)) errs.phone = 'SĐT phải từ 10-15 chữ số';

    if (!form.agree) errs.agree = 'Bạn phải đồng ý điều khoản';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      onSubmit(form);
      setForm({ name: '', age: '', email: '', phone: '', agree: false });
      setErrors({});
    } else {
      setErrors(errs);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {Object.values(errors).map((err, idx) => (
        <Alert key={idx} variant="danger">{err}</Alert>
      ))}

      <Form.Group controlId="formName">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control name="name" value={form.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formAge" className="mt-2">
        <Form.Label>Tuổi</Form.Label>
        <Form.Control name="age" type="number" value={form.age} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mt-2">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" value={form.email} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formPhone" className="mt-2">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control name="phone" value={form.phone} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formAgree" className="mt-3">
        <Form.Check name="agree" type="checkbox" checked={form.agree} onChange={handleChange} label="Tôi đồng ý điều khoản" />
      </Form.Group>

      <Button type="submit" className="mt-3">Gửi</Button>
    </Form>
  );
}

export default ValidatedForm;
