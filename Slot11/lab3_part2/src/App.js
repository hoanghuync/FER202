import React from 'react';
import QuizApp from './components/QuizApp';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>React Quiz App</h1>
        <QuizApp />
      </div>
    </div>
  );
}

export default App;