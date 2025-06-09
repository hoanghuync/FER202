import logo from './logo.svg';
import './App.css';
function GroupedEmployees() {
    const employees = [
      { id: 1, name: "Anna", department: "HR" },
      { id: 2, name: "Brian", department: "IT" },
      { id: 3, name: "Clara", department: "Finance" },
      { id: 4, name: "Ann", department: "Finance" },
      { id: 5, name: "Elisabeth", department: "HR" }
    ];
  
    const departments = employees.reduce((acc, employee) => {
      acc[employee.department] = acc[employee.department] || [];
      acc[employee.department].push(employee.name);
      return acc;
    }, {});
  
    return (
      <div>
        <h1>
        <strong>Ex8</strong>
      </h1>
        {Object.entries(departments).map(([dept, names]) => (
          <div key={dept}>
            <h3>{dept}</h3>
            <ul>
              {names.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  export default GroupedEmployees;
  