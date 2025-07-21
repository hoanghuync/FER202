import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EmailPasswordForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(email && !emailRegex.test(email) ? 'Email không hợp lệ' : '');
    setPasswordError(password && password.length < 8 ? 'Mật khẩu phải >= 8 ký tự' : '');
    setFormValid(emailRegex.test(email) && password.length >= 8);
  }, [email, password]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!emailError}
        />
        <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!passwordError}
        />
        <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-3" type="submit" disabled={!formValid}>Submit</Button>
    </Form>
  );
}

export default EmailPasswordForm;
