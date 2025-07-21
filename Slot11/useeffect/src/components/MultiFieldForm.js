import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MultiFieldForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = name.trim() && gender && country && agree;
    setFormValid(isValid);
  }, [name, gender, country, agree]);

  return (
    <Form>
      <Form.Group>
        <Form.Label>Họ tên</Form.Label>
        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label><br />
        <Form.Check inline type="radio" label="Nam" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
        <Form.Check inline type="radio" label="Nữ" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Chọn quốc gia --</option>
          <option value="VN">Việt Nam</option>
          <option value="US">Hoa Kỳ</option>
          <option value="JP">Nhật Bản</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>

      <Button className="mt-3" type="submit" disabled={!formValid}>Gửi</Button>
    </Form>
  );
}

export default MultiFieldForm;
