import React from "react";

function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="employee-card">
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
}

export default EmployeeCard;
