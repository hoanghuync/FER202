import logo from './logo.svg';
import './App.css';

import React from "react";

function PeopleList() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "Daisy", age: 20, occupation: "Developer" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>List of People</h2>
      {people.map(person => (
        <div key={person.id} style={{
          border: "1px solid #ccc",
          padding: "0.75rem",
          marginBottom: "0.5rem",
          borderRadius: "8px"
        }}>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Occupation:</strong> {person.occupation}</p>
        </div>
      ))}
    </div>
  );
}

export default PeopleList;
