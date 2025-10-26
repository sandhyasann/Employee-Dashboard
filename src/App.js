import React, { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setEmployees(data.slice(0, 5)));
  }, []);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="App">
      <h1>Employee Dashboard</h1>
      <AddEmployeeForm onAdd={addEmployee} />
      <EmployeeList employees={employees} onDelete={deleteEmployee} />
    </div>
  );
  <div className="form-container">
  <AddEmployeeForm onAdd={addEmployee} />
</div>

}

export default App;
