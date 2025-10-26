import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete }) {
  return (
    <div className="employee-list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} employee={emp} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default EmployeeList;
