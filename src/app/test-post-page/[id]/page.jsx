"use client"
import React, { useEffect, useState } from "react";
import EmployeeCard from "../../components/EmployeeCard"

const Page = ({params}) => {
  
  const [message, setMessage] = useState([]);

  useEffect(() => {
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
        setMessage(data.users);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };
         getEmployee();
     }, []);

     console.log(message)

 return (
      <div key={message.id}>
        <EmployeeCard
          fullname={`${message.firstName} ${message.middleName} ${message.lastName}`}
          email={message.email}
          designation={message.designation}
          status={message.employeeStatus}
        />
        {message.id + " , " + message.email + " ," + message.firstName}
      </div>
    );
 

   
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
export default Page;
