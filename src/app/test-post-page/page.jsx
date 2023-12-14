"use client"
import React, { useEffect, useState } from "react";

const Page = () => {
  const [message, setMessage] = useState([]);
    useEffect(() => {
      const getData = async () => {
        return await fetch('/api/test-page', {
          method: 'POST'
        })
        .then(function(response) {
      return response.json();
    })
    
}
      getData().then(value => {
        console.log(value.message.value[0])
        setMessage(value)
        
      });
      

    }, []);


  return <div>
    
    
          
     
     {
          
    }
   
  </div>;

  }
export default Page;
