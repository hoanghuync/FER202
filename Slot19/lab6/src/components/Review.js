import React from 'react';
import { useSelector } from 'react-redux';

function Review() {
  const questions = useSelector(state => state.quiz.questions);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Quiz Review</h2>
      {questions.map((q, idx) => (
        <div key={q.id} className={`p-3 mb-3 rounded ${q.selected === q.correct ? 'bg-success-subtle' : 'bg-danger-subtle'}`}>
          <h6>Q{idx + 1}. {q.question}</h6>
          <div className="mt-2">
            <strong>Your answer:</strong> {q.selected || "Not answered"}
          </div>
          <div className="text-info">
            <strong>Correct answer:</strong> {q.correct}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
