"use client"
import React, { useEffect, useState } from "react";

const Page = () => {
  const [message, setMessage] = useState([]);
    useEffect(() => {
      const getData = async () => {
        return await fetch('/api/test-page', {
          method: 'GET'
        })
        .then(function(response) {
      return response.json();
    })
    
}
      getData().then(value => {
        let arrayObject = Object.keys(value).map(key => value[key]);
        setMessage(arrayObject)
        
        
      });
    
    }, []);
  return <div>
    
    
          
     
     {
       /* message.map((data, key) => {
          if (data.value[key] != null) {
              console.log(data.value[0])
      
          }*/
          /*return (
            <div key={key}>
              {data.value.id[0] +
                " , " +
                data.value.email[0] +
                " ," +
                data.value.name[0]
              }
            </div>
          );*/
        
      }
   
   
  </div>;

  }
export default Page;
