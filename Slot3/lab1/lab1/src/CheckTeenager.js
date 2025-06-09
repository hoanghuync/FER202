import logo from './logo.svg';
import './App.css';
function CheckTeenager() {
    const employees = [
      { name: "Anna", age: 50 },
      { name: "Brian", age: 40 },
      { name: "Clara", age: 19 }
    ];
  
    const isTeenager = employees.some(employee => employee.age >= 10 && employee.age <= 20);
  
    return(
        <div>
            <h1>
        <strong>Ex9</strong>
            </h1>
         <p>Is there a teenager? {isTeenager.toString()}</p>
         </div>
    );
  }
  
  export default CheckTeenager;
  