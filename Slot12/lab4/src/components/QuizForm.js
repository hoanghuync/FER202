import React, { useState, useContext } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { QuizContext } from './QuizContext';

function QuizForm() {
  const { quizData, setQuizData } = useContext(QuizContext);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswers, setNewAnswers] = useState(['', '', '']);
  const [newCorrectAnswer, setNewCorrectAnswer] = useState('');

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion || newAnswers.some(answer => !answer) || !newCorrectAnswer) {
      alert('Vui lòng điền đầy đủ các trường!');
      return;
    }

    const newQuizItem = {
      question: newQuestion,
      answers: newAnswers,
      correctAnswer: newCorrectAnswer
    };

    setQuizData([...quizData, newQuizItem]);
    setNewQuestion('');
    setNewAnswers(['', '', '']);
    setNewCorrectAnswer('');
  };

  return (
    <Card className="mb-4">
      <Card.Header>Thêm Câu Hỏi Mới</Card.Header>
      <Card.Body>
        <Form onSubmit={handleAddQuestion}>
          <Form.Group className="mb-3">
            <Form.Label>Câu hỏi</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Nhập câu hỏi"
            />
          </Form.Group>
          
          {newAnswers.map((answer, index) => (
            <Form.Group className="mb-3" key={index}>
              <Form.Label>Lựa chọn {index + 1}</Form.Label>
              <Form.Control
                type="text"
                value={answer}
                onChange={(e) => {
                  const updatedAnswers = [...newAnswers];
                  updatedAnswers[index] = e.target.value;
                  setNewAnswers(updatedAnswers);
                }}
                placeholder={`Nhập lựa chọn ${index + 1}`}
              />
            </Form.Group>
          ))}
          
          <Form.Group className="mb-3">
            <Form.Label>Đáp án đúng</Form.Label>
            <Form.Control
              as="select"
              value={newCorrectAnswer}
              onChange={(e) => setNewCorrectAnswer(e.target.value)}
            >
              <option value="">Chọn đáp án đúng</option>
              {newAnswers.map((answer, index) => (
                <option key={index} value={answer}>{answer}</option>
              ))}
            </Form.Control>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Thêm Câu Hỏi
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default QuizForm;