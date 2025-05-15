import logo from './logo.svg';
import './App.css';

import React from "react";

function PeopleTable() {
  const people = [
    { name: "Alice", age: 25, occupation: "Engineer" },
    { name: "Bob", age: 30, occupation: "Designer" },
    { name: "Charlie", age: 35, occupation: "Teacher" },
    { name: "Daisy", age: 20, occupation: "Developer" },
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>People Table</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={cellStyle}>Name</th>
            <th style={cellStyle}>Age</th>
            <th style={cellStyle}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td style={cellStyle}>{person.name}</td>
              <td style={cellStyle}>{person.age}</td>
              <td style={cellStyle}>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "left"
};

export default PeopleTable;
