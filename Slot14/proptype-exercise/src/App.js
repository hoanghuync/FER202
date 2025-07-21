import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedForm from './components/ValidatedForm';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Validated form submitted:', data);
  };

  return (
    <div className="App container py-5">
      <h1 className="text-center mb-4">Ví dụ 4: Form đầy đủ kiểm tra hợp lệ</h1>
      <ValidatedForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
