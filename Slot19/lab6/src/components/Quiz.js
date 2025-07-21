import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAnswer, resetQuiz } from '../store/quizSlice';

function Quiz() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.quiz.questions);

  const handleSelect = (id, answer) => {
    dispatch(selectAnswer({ questionId: id, answer }));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">JavaScript Quiz</h2>
      {questions.map((q, idx) => (
        <div key={q.id} className="mb-4">
          <h5>Q{idx + 1}. {q.question}</h5>
          <div className="d-grid gap-2">
            {q.options.map(opt => (
              <button
                key={opt}
                className={`btn ${q.selected === opt ? 'btn-primary' : 'btn-outline-secondary'}`}
                onClick={() => handleSelect(q.id, opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="text-center mt-4">
        <button className="btn btn-success me-3" onClick={() => alert("Go to review for result")}>Submit</button>
        <button className="btn btn-warning" onClick={() => dispatch(resetQuiz())}>Reset</button>
      </div>
    </div>
  );
}

export default Quiz;