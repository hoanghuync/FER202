import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 'Paris',
  },
  {
    question: 'Which language is used for web apps?',
    options: ['PHP', 'Python', 'JavaScript', 'All'],
    answer: 'All',
  },
];

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOption = (opt) => {
    setSelected(opt);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelected('');
    } else {
      setShowResult(true);
    }
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showResult ? (
          <div className="text-center">
            <h3>Your Score: {score} / {questions.length}</h3>
            <Button onClick={() => { setCurrent(0); setScore(0); setShowResult(false); }}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <>
            <h4>{questions[current].question}</h4>
            <div className="mt-3">
              {questions[current].options.map((opt, idx) => (
                <Button
                  key={idx}
                  variant={selected === opt ? 'success' : 'outline-primary'}
                  onClick={() => handleOption(opt)}
                  className="m-2"
                >
                  {opt}
                </Button>
              ))}
            </div>
            <Button className="mt-3" disabled={!selected} onClick={handleNext}>
              {current === questions.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
}

export default Quiz;