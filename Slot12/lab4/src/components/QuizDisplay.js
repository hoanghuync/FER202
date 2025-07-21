import React, { useContext, useEffect } from 'react';
import { Card, ListGroup, Alert, Button } from 'react-bootstrap';
import { QuizContext } from './QuizContext';

function QuizDisplay() {
  const { quizData, selectedAnswers, setSelectedAnswers } = useContext(QuizContext);

  const handleAnswerSelect = (questionIndex, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answer
    });
  };

  useEffect(() => {
    console.log('Dữ liệu quiz đã cập nhật:', quizData);
  }, [quizData]);

  const handleReplay = () => {
    setSelectedAnswers({}); // Reset selectedAnswers về rỗng
  };

  const allAnswered = quizData.length > 0 && Object.keys(selectedAnswers).length === quizData.length;

  return (
    <div>
      {quizData.map((quiz, index) => (
        <Card key={index} className="mb-4">
          <Card.Header>Câu hỏi {index + 1}</Card.Header>
          <Card.Body>
            <Card.Title>{quiz.question}</Card.Title>
            <ListGroup>
              {quiz.answers.map((answer, ansIndex) => (
                <ListGroup.Item
                  key={ansIndex}
                  action
                  active={selectedAnswers[index] === answer}
                  onClick={() => handleAnswerSelect(index, answer)}
                >
                  {answer}
                </ListGroup.Item>
              ))}
            </ListGroup>
            {selectedAnswers[index] && (
              <Alert
                variant={
                  selectedAnswers[index] === quiz.correctAnswer
                    ? 'success'
                    : 'danger'
                }
                className="mt-3"
              >
                {selectedAnswers[index] === quiz.correctAnswer
                  ? 'Đúng!'
                  : `Sai. Đáp án đúng là: ${quiz.correctAnswer}`}
              </Alert>
            )}
          </Card.Body>
        </Card>
      ))}
      {allAnswered && (
        <Button variant="secondary" onClick={handleReplay} className="mt-3">
          Replay
        </Button>
      )}
    </div>
  );
}

export default QuizDisplay;