"use client";
// Import React
import React, { useState } from "react";

import EmployeeCard from "@/app/components/EmployeeCard";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";

// Functional component
export default function MappingDataToEmployeeCard() {
  // State to manage employee data array
  const [employeeDataArray, setEmployeeDataArray] = React.useState([]);
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(false);
  const [selectedEmployeeIndex, setSelectedEmployeeIndex] = useState(null);

  const updateEmployee = async () => {
    try {
      const response = await fetch("/api/employee", {
        method: "POST",
        body: JSON.stringify(employeeDataArray),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      // You can handle the response as needed
      const addedEmployee = await response.json();
      console.log("Employee added successfully:", addedEmployee);
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleUpdateEmployee = async (formData) => {
    if (selectedEmployeeIndex !== null) {
      // Update existing employee data
      const updatedEmployeeDataArray = [...employeeDataArray];
      updatedEmployeeDataArray[selectedEmployeeIndex] = formData;
      await setEmployeeDataArray(updatedEmployeeDataArray);
      setSelectedEmployeeIndex(null); // Reset selected index after update
      updateEmployee();
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
            {visibleCreateEmployeeForm ? "Close Form" : "Update Employee"}
          </button>
        </div>

        <div className="p-10">
          {visibleCreateEmployeeForm && (
            <CreateEmployeeForm
              onFormSubmit={handleUpdateEmployee}
              initialData={
                selectedEmployeeIndex !== null
                  ? employeeDataArray[selectedEmployeeIndex]
                  : null
              }
            />
          )}
        </div>

        <div className="flex flex-wrap p-10">
          {employeeDataArray.map(
            (employeeData, index) =>
              selectedEmployeeIndex === index && (
                <div key={index}>
                  <EmployeeCard
                    id={employeeData.id}
                    {...employeeData}
                    onClick={() => handleCardClick(index)}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
