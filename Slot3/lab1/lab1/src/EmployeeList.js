import logo from './logo.svg';
import './App.css';

function EmployeeList() {
    const employees = [
      { id: 1, name: "Anna", department: "HR", age: 50 },
      { id: 2, name: "Brian", department: "IT", age: 40 },
      { id: 3, name: "Clara", department: "Finance", age: 19 },
      { name: "Ann", department: "Finance", age: 22 },
      { name: "Elisabeth", department: "HR", age: 16 }
    ];
  
    return (
      <div>
        <h1>
        <strong>Ex2</strong>
      </h1>
        <ul>
          {employees.map((employee, index) => (
            <li key={employee.id || index}>{employee.name} - {employee.department}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default EmployeeList;
  