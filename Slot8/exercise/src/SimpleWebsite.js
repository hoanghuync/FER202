import React from 'react';
import { Container, Navbar, Nav, Row, Col, Image } from 'react-bootstrap';

const SimpleWebsite = () => {
  return (
    <div>
      {/* Header */}
      <div style={{ backgroundColor: '#f08c2d', padding: '20px 0' }}>
        <Container className="text-center">
          <Image
            src="/logo.jpg" // Đặt logo vào thư mục `public`
            alt="FPT Logo"
            fluid
            style={{ maxHeight: '100px' }}
          />
          <Navbar variant="dark" className="justify-content-center mt-2">
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </div>

      {/* Nội dung chính */}
      <Container className="my-4 text-center">
        <h5 className="fw-bold">About</h5>
        <p>This is the about section of the website.</p>

        <h5 className="fw-bold mt-4">Contact</h5>
        <p>For any inquiries, please contact us at example@example.com.</p>
      </Container>

      {/* Footer */}
      <div style={{ backgroundColor: '#f2c288', padding: '10px 0' }}>
        <Container className="text-center">
          <small>© 2023 Website. All rights reserved.</small>
        </Container>
      </div>
    </div>
  );
};

export default SimpleWebsite;
