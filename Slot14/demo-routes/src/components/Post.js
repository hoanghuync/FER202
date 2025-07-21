import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

const posts = [
  { id: 1, title: 'React Router Basics', content: 'This post explains the basics of React Router in a React application.' },
  { id: 2, title: 'React Bootstrap Introduction', content: 'This post introduces how to use React Bootstrap to create beautiful UIs.' },
  { id: 3, title: 'JavaScript ES6 Features', content: 'This post discusses the new features introduced in JavaScript ES6.' }
];

function Post() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Latest Posts</h2>
      <Row>
        {posts.map((post) => (
          <Col md={4} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={`/post/${post.id}`} className="btn btn-outline-primary btn-sm">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Post;