import logo from './logo.svg';
import './App.css';
function SortedEmployees() {
    const employees = [
      { id: 1, name: "Anna", department: "HR" },
      { id: 2, name: "Brian", department: "IT" },
      { id: 3, name: "Clara", department: "Finance" },
      {id: 4, name: "Ann", department: "Finance"},
      {id: 5,  name: "Elisabeth", department: "HR"}
    ];
  
    const sortedEmployees = [...employees].sort(
      (a, b) => a.department.localeCompare(b.department) || a.name.localeCompare(b.name)
    );
  
    return (
        <div>
        <h1>
        <strong>Ex7</strong>
        </h1>
      <ul>
        {sortedEmployees.map((employee, index) => (
          <li key={employee.id || index}>{employee.name} - {employee.department}</li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default SortedEmployees;
  