import logo from './logo.svg';
import './App.css';

function EmployeeDropdown() {
    const employees = [
      { id: 1, name: "Anna" },
      { id: 2, name: "Brian" },
      { id: 3, name: "Clara" },
      {id: 4, name: "Ann", department: "Finance"},
      {id: 5, name: "Elisabeth", department: "HR"}
    ];
  
    return (
    <div>
        <h1>
        <strong>Ex5</strong>
        </h1>
      <select>
        {employees.map((employee, index) => (
          <option key={employee.id || index} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
    );
  }
  
  export default EmployeeDropdown;
  