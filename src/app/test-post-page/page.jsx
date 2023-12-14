"use client";
import React, { useEffect, useState } from "react";
import EmployeeCard from "../components/EmployeeCard";

const Page = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    const getEmployee = async () => {
      try {
        const response = await fetch("/api/employee", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch employee data");
        }

        const data = await response.json();
        setMessage(Object.keys(data).map((key) => data[key]));
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    const addEmployee = async (employeeData) => {
      try {
        const response = await fetch("/api/employee", {
          method: "POST",
          body: JSON.stringify(employeeData),
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

    // Call getEmployee to fetch existing data when the component mounts
    getEmployee();

    // Call addEmployee with the necessary data
    const employeeData = {
      id: 2,
      email: "jiyo@asdasdgmail.com",
      firstName: "Jiyo",
      middleName: "Nercuit",
      lastName: "Valmoria",
      designation: "NTP",
      employeeStatus: "active",
    };
    addEmployee(employeeData);
  }, []);

  return (
    <div>
      {message.map((data, key) => {
        if (data[key] != undefined) {
          return (
            <div key={key}>
              <EmployeeCard
                fullname={`${data[key].firstName} ${data[key].middleName} ${data[key].lastName}`}
                email={data[key].email}
                // unit={data.unit} // Replace with the actual property name from your data
                designation={data[key].designation}
                status={data[key].employeeStatus}
              />
              {data[key].id + " , " + data[key].email + " ," + data[key].name}
            </div>
          );
        }
      })}
    </div>
  );
};
export default Page;
