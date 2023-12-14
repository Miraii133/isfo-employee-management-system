"use client";
import React, { useState, useEffect } from "react";
import CreateEmployeeForm from "@/app/components/CreateEmployeeForm";
import EmployeeCard from "@/app/components/EmployeeCard";
const Page = ({ params }) => {
  const [message, setMessage] = useState([]);
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(true);

  useEffect(() => {
    let employeeId = params.id;
    const getEmployee = async () => {
      try {
        const response = await fetch(`/api/employee/${employeeId}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }

        const data = await response.json();
        setMessage(data.users);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    getEmployee();
  }, []);

  const toggleFormVisibility = () => {
    setVisibleCreateEmployeeForm((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-screen-lg">
        <div className="flex items-center justify-center p-10">
          <button
            onClick={toggleFormVisibility}
            className="w-3/4 p-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {visibleCreateEmployeeForm ? "Close Form" : "Update Employee"}
          </button>
        </div>

        <div className="p-10">
          {visibleCreateEmployeeForm && (
            <CreateEmployeeForm // Pass the current employee data as initial data
            />
          )}
        </div>

        <div className="flex flex-wrap p-10">
          <div>
            <div key={message.id}>
              <EmployeeCard
                fullname={`${message.firstName} ${message.middleName} ${message.lastName}`}
                email={message.email}
                designation={message.designation}
                status={message.employeeStatus}
              />
              {message.id + " , " + message.email + " ," + message.firstName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
