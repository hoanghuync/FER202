import logo from './logo.svg';
import './App.css';
function ITDepartment() {
    const employees = [
      { id: 1, name: "Anna", department: "HR" },
      { id: 2, name: "Brian", department: "IT" },
      { id: 3, name: "Clara", department: "Finance" }
    ];
  
    const itEmployees = employees.filter(employee => employee.department === "IT");
  
    return (
        <div>
      <h1>
        <strong>Ex6</strong>
      </h1>
      <ul>
        {itEmployees.map((employee, index) => (
          <li key={employee.id || index}>{employee.name}</li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default ITDepartment;
  