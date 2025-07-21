import React, { useState } from 'react';
// import UserPosts from './components/UserPosts';
import ValidatedInput from './components/ValidatedInput';
import EmailPasswordForm from './components/EmailPasswordForm';
import MultiFieldForm from './components/MultiFieldForm';

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="App">
      {/* <h2>Exercise 1: User Posts Fetch</h2>
      <UserPosts userId={userId} />
      <button onClick={() => setUserId((prev) => prev + 1)}>Next User</button> */}

      <hr />
      <h2>Exercise 4: Validated Input</h2>
      <ValidatedInput />

      <hr />
      <h2>Exercise 5: Email & Password Validation</h2>
      <EmailPasswordForm />

      <hr />
      <h2>Exercise 6: Multi-field Validation Form</h2>
      <MultiFieldForm />
    </div>
  );
}

export default App;
