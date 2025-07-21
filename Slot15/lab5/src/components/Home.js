import React from 'react';
import { Container, Carousel, Row, Col, Image } from 'react-bootstrap';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import icon1 from '../images/icon1.jpg';
import icon2 from '../images/icon2.jpg';
import icon3 from '../images/icon3.jpg';
import icon4 from '../images/icon4.jpg';
import icon5 from '../images/icon5.jpg';
import icon6 from '../images/icon6.jpg';

function Home() {
  return (
    <Container className="mt-4">
      <Carousel fade indicators={true}>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Banner 3" />
        </Carousel.Item>
      </Carousel>

      <Row className="text-center mt-4">
        {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, idx) => (
          <Col key={idx} xs={4} md={2} className="mb-3">
            <Image src={icon} roundedCircle fluid style={{ width: '100px', height: '100px' }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;