import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px' }}>Quiz Complete!</h2>
      <p style={{ fontSize: '20px' }}>Your score: {score} / {total}</p>
      <button style={{ fontSize: '18px', padding: '10px 20px' }} onClick={onRestart}>Try Again</button>
    </div>
  );
}

export default Result;
