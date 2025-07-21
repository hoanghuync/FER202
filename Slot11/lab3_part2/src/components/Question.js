import React from 'react';

function Question({ question, options, onAnswer }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>{question}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {options.map((option, idx) => (
          <li key={idx} style={{ margin: '15px 0' }}>
            <button style={{ fontSize: '20px', padding: '10px 20px' }} onClick={() => onAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;