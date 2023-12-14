"use client"
import React, { useEffect, useState } from "react";

const Page = ({params}) => {
  
  const [message, setMessage] = useState([]);

  let employeeId = params.id
    const getEmployee = async () => {
      try {
        const response = await fetch(`/api/employee/${employeeId}`, {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }

        const data = await response.json();
        console.log(data);
        setMessage(Object.keys(data).map(key => data[key]));
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    // Call the function to fetch employee data

   
 /* const addEmployee = async (employeeData) => {
      try {
        const response = await fetch('/api/employee', {
          method: 'POST',
          body: JSON.stringify(employeeData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to add employee');
        }

        // You can handle the response as needed
        const addedEmployee = await response.json();
        console.log('Employee added successfully:', addedEmployee)

      } catch (error) {
        console.error('Error adding employee:', error);
      }
    };

    // Call getEmployee to fetch existing data when the component mounts
    getEmployee();


    // Call addEmployee with the necessary data
    /*const employeeData = {
      id: 3,
      email: 'jiyo@asdasasdasdsadgmail.com',
      firstName: 'Jiyo',
      middleName: 'Nercuit',
      lastName: 'Valmoria',
      designation: 'NTP',
      employeeStatus: 'active'
    };
    addEmployee(employeeData);*/
   

    return (
      <div>
        {
          
      
          /*message.map((data, key) => {
            if (data[key] != undefined){
            return (
              <div key={key}>
                 {data[key].id +
                " , " +
                data[key].email +
                " ," +
                data[key].name 
              }
              </div>
              
            )
            }
                
             
                
            })*/
            
           
        }

         
        </div>
       
    )


  }
export default Page;
