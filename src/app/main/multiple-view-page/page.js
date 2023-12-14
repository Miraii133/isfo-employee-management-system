"use client";
// Import React
import React, { useState } from "react";
import EmployeeCard from "@/app/components/EmployeeCard";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";

// Functional component for the multiple view page
export default function MultipleViewPage() {
  const [employeeDataArray, setEmployeeDataArray] = useState([]);
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(false);

  const handleOnFormSubmit = (formData) => {
    setEmployeeDataArray([...employeeDataArray, formData]);
    setVisibleCreateEmployeeForm(false);
  };

  const visibleForm = () => {
    setVisibleCreateEmployeeForm((prevVisibility) => !prevVisibility);
  };

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

        <div className="flex flex-wrap p-10">
          {employeeDataArray.map((employeeData, index) => (
            <EmployeeCard key={index} id={employeeData.id} {...employeeData} />
          ))}
        </div>
      </div>
    </div>
  );
}
