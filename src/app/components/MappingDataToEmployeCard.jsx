"use client";

import React, { useState } from "react";

// Import the components
import EmployeeCard from "./EmployeeCard";
import CreateEmployeeForm from "./CreateEmployeeForm";

// Functional component
export default function MappingDataToEmployeCard() {
  // State to manage employee data array
  const [employeeDataArray, setEmployeeDataArray] = React.useState([]);

  // Callback function to handle form submission
  const handleOnFormSubmit = (formData) => {
    setEmployeeDataArray([...employeeDataArray, formData]);
    setVisibleCreateEmployeeForm(false); // Reset form visibility
  };

  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(false);

  // Toggle form visibility
  const visibleForm = () => {
    setVisibleCreateEmployeeForm((prevVisibility) => !prevVisibility);
  };

  // JSX to render components
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center justify-center p-10">
          <button
            onClick={visibleForm}
            className="w-3/4 p-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {visibleCreateEmployeeForm ? "Close Form" : "Add Employee"}
          </button>
        </div>

        <div className="p-10">
          {visibleCreateEmployeeForm && (
            <CreateEmployeeForm onFormSubmit={handleOnFormSubmit} />
          )}
        </div>
        <div className="flex flex-wrap pt-10">
          {employeeDataArray.map((employeeData, index) => (
            <EmployeeCard key={index} {...employeeData} />
          ))}
        </div>
      </div>
    </div>
  );
}
