"use client";
import React, { useEffect, useState } from "react";
import EmployeeCard from "../../components/EmployeeCard";

const Page = ({ params }) => {
  const [message, setMessage] = useState([]);
  const [visibleCreateEmployeeForm, setVisibleCreateEmployeeForm] =
    useState(false);

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

  console.log(message);
        // checks if form is submitted first
    // before triggering addEmployee()
    // since useEffect is triggered every
    // component lifecycle actions to avoid
    // triggering addEmployee when component is mounted

 const [formSubmitted, setFormSubmitted] = useState(false);
  useEffect(() => {
    if (formSubmitted) {
      addEmployee();
      setVisibleCreateEmployeeForm(false);
      setFormSubmitted(false); //
    }
  }, [formSubmitted]);

  const handleOnFormSubmit = async (formData) => {
    setEmployeeDataArray(formData);
    setFormSubmitted(true);
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
    <div className="flex flex-wrap p-10"></div>
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
 
)
        
                
         
  
       
    


  }
export default Page;
