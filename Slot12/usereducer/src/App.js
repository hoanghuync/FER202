import React from 'react';
import Counter from './components/Counter';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>useReducer Exercises</h1>
      <Counter />
      <hr />
      <ChangeNameAge />
      <hr />
      <ItemList />
      <hr />
      <QuestionBank />
    </div>
  );
}

export default App;