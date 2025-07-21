import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/authSlice';
import axios from 'axios';
import { Form, Button, Container, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AccountDetail() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...user });
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3001/users/${form.id}`, form);
      dispatch(updateUser(res.data));
      setMessage('✅ Cập nhật thành công!');
      setTimeout(() => setMessage(null), 3000);
    } catch (err) {
      setMessage('❌ Cập nhật thất bại!');
    }
  };

  if (!user) return <p className="text-center mt-5 text-danger">⚠ Bạn chưa đăng nhập</p>;

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: 420, boxShadow: '0 6px 18px rgba(0,0,0,0.15)', borderRadius: '15px' }}>
        <Card.Body>
          <h3 className="text-center mb-4" style={{ fontWeight: 600, color: '#0d6efd' }}>
            👤 Thông tin tài khoản
          </h3>
          {message && (
            <Alert variant="info" className="text-center">
              {message}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>👨‍💼 Họ tên</Form.Label>
              <Form.Control
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
                placeholder="Nhập họ tên..."
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>📧 Email</Form.Label>
              <Form.Control
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="example@email.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>🔒 Mật khẩu</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                placeholder="********"
                required
              />
              <Form.Check
                className="mt-2"
                type="checkbox"
                label="Hiện mật khẩu"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                💾 Cập nhật
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AccountDetail;
