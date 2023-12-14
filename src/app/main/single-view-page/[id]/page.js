// SingleViewPage.js

"use client";
import React, { useState, useEffect } from "react";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";
import EmployeeCard from "@/app/components/EmployeeCard";

const SingleViewPage = ({ params }) => {
  const [employeeData, setEmployeeData] = useState({});
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(true);

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await fetch(`/api/employee/${params.id}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }

        const data = await response.json();
        setEmployeeData(data.users);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    getEmployee();
  }, [params.id]);

  const handleUpdateFormSubmit = async (formData) => {
    try {
      const response = await fetch(`/api/employee/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to update employee");
      }

      const updatedEmployee = await response.json();
      console.log("Employee updated successfully:", updatedEmployee);

      // Update the local state with the modified form data
      setEmployeeData((prevData) => ({
        ...prevData,
        ...updatedEmployee,
      }));

      // Close the form after successful update
      setVisibleCreateEmployeeForm(false);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const deleteEmployee = async () => {
    try {
      const response = await fetch(`/api/employee/${params.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      console.log("Employee deleted successfully");

      // Update the local state or trigger a re-fetch
      setEmployeeData({});
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const toggleFormVisibility = () => {
    setVisibleCreateEmployeeForm((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center justify-center p-10">
          <button
            onClick={toggleFormVisibility}
            className="w-full p-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {visibleCreateEmployeeForm ? "Close Form" : "Update Employee"}
          </button>
          <button
            onClick={deleteEmployee}
            className="w-full p-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>

        <div className="p-10">
          {visibleCreateEmployeeForm && (
            <CreateEmployeeForm
              onFormSubmit={handleUpdateFormSubmit}
              initialData={employeeData}
            />
          )}
        </div>

        <div className="flex flex-wrap p-10">
          <div>
            <EmployeeCard
              fullname={`${employeeData.firstName} ${employeeData.middleName} ${employeeData.lastName}`}
              email={employeeData.email}
              designation={employeeData.designation}
              status={employeeData.employeeStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleViewPage;
