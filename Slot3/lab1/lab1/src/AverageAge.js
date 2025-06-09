import logo from './logo.svg';
import './App.css';

function AverageAge() {
    const ages = [50, 40, 19, 22, 16];
  
    const calculateAverageAge = (...ages) => {
      const sum = ages.reduce((total, age) => total + age, 0);
      return (sum / ages.length).toFixed(2);
    };
  
    return ( 
        <div>
            <h1>
        <strong>Ex4</strong>
            </h1>
    <p>Average Age: {calculateAverageAge(...ages)}</p>
        </div>
    );
  }
  
  export default AverageAge;
  