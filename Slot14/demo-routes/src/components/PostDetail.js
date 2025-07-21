import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const posts = [
  { id: 1, title: 'React Router Basics', content: 'This post explains the basics of React Router in a React application.' },
  { id: 2, title: 'React Bootstrap Introduction', content: 'This post introduces how to use React Bootstrap to create beautiful UIs.' },
  { id: 3, title: 'JavaScript ES6 Features', content: 'This post discusses the new features introduced in JavaScript ES6.' }
];

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <Container className="mt-5">
      {post ? (
        <Card>
          <Card.Body>
            <Card.Title className="h3">{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Post not found.</p>
      )}
    </Container>
  );
}

export default PostDetail;
