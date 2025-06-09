import logo from './logo.svg';
import './App.css';

function EmployeeTable() {
    const employees = [
      { id: 1, name: "Anna", department: "HR" },
      { id: 2, name: "Brian", department: "IT" },
      { id: 3, name: "Clara", department: "Finance" },
      {id: 4, name: "Ann", department: "Finance"},
      {id: 5,  name: "Elisabeth", department: "HR" }
    ];
  
    const tableStyle = {
      width: "20%",  // Kích thước bảng nhỏ hơn
      borderCollapse: "collapse",
      marginBottom: "20px",
      textAlign: "left"  // Căn trái
    };
  
    const thTdStyle = {
      border: "1px solid #333",
      padding: "6px",
      fontSize: "14px"
    };
  
    return (
      <div>
        <h1>
        <strong>Ex3</strong>
      </h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id || index}>
              <td style={thTdStyle}>{employee.id || index}</td>
              <td style={thTdStyle}>{employee.name}</td>
              <td style={thTdStyle}>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  export default EmployeeTable;
  