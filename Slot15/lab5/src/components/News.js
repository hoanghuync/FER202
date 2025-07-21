import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import img1 from '../images/event-1.jpg';
import img2 from '../images/event-2.jpg';
import img3 from '../images/event-3.jpg';
import img4 from '../images/event-4.jpg';

const newsLists = [
  {
    id: 1,
    title: 'Woman bakes expletive-laden pies to “get a rise” out of her grandmother in annual tradition',
    description: '“What started as a means to get a rise out of my Grammy has snowballed into a weird family tradition,” wrote Jess Lydon.',
    image: img1
  },
  {
    id: 2,
    title: 'Martha Stewart shows off her 30 pies after canceled Thanksgiving dinner plans',
    description: 'Queen of Thanksgiving Martha Stewart may not be hosting a turkey dinner this year but fret not, she will still be celebrating with literally 30 pies.',
    image: img2
  },
  {
    id: 3,
    title: 'Burger King is testing a new breakfast sandwich',
    description: 'This is a win for the flatbread fans.',
    image: img3
  },
  {
    id: 4,
    title: 'Popeyes permanently adds chicken wings to its menu',
    description: 'And you can get ’em in five different flavors.',
    image: img4
  }
];

function News() {
  return (
    <Container className="mt-4">
      <h2 className="text-danger mb-4">News Category</h2>
      <Row>
        {newsLists.map((item) => (
          <Col md={3} sm={6} xs={12} key={item.id} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={item.image} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '15px', fontWeight: 'bold' }}>{item.title}</Card.Title>
                <Card.Text style={{ fontSize: '14px' }}>{item.description}</Card.Text>
                <a href="#" style={{ fontSize: '14px' }}>{item.title}</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default News;