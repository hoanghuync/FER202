import logo from './logo.svg';
import './App.css';

function EmployeeDetails() {
    const employee = { name: "John Doe", age: 30, department: "IT" };
    const { name, age, department } = employee;
  
    return (
      <div>
        <h1>
        <strong>Ex1</strong>
      </h1>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p>Department: {department}</p>
      </div>
    );
  }
  
  export default EmployeeDetails;
  