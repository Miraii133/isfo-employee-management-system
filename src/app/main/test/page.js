"use client";
// Import React
import React, { useState } from "react";

// Import the components
import EmployeeCard from "../../components/EmployeeCard";
import CreateEmployeeForm from "../../components/CreateEmployeeForm";

// Functional component
export default function page() {
  // State to manage employee data array
  const [employeeDataArray, setEmployeeDataArray] = React.useState([]);
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  // Callback function to handle form submission
  const handleOnFormSubmit = (formData) => {
    if (selectedEmployeeIndex !== null) {
      // Update existing employee data
      const updatedEmployeeDataArray = [...employeeDataArray];
      updatedEmployeeDataArray[selectedEmployeeIndex] = formData;
      setEmployeeDataArray(updatedEmployeeDataArray);
      setSelectedEmployeeIndex(null); // Reset selected index after update
    } else {
      // Add new employee data
      setEmployeeDataArray([...employeeDataArray, formData]);
    }

    setVisibleCreateEmployeeForm(false);
  };

  // Function to handle clicking on an employee card
  const handleCardClick = (index) => {
    setVisibleCreateEmployeeForm(true);
    setSelectedEmployeeIndex(index);
  };

  // Toggle form visibility
  const visibleForm = () => {
    setVisibleCreateEmployeeForm((prevVisibility) => !prevVisibility);
    setSelectedEmployeeIndex(null); // Reset selected index when showing/hiding the form
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
            <CreateEmployeeForm
              onFormSubmit={handleOnFormSubmit}
              initialData={
                selectedEmployeeIndex !== null
                  ? employeeDataArray[selectedEmployeeIndex]
                  : null
              }
            />
          )}
        </div>

        <div className="flex flex-wrap p-10">
          {employeeDataArray.map((employeeData, index) => (
            <EmployeeCard
              key={index}
              id={employeeData.id}
              {...employeeData}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
