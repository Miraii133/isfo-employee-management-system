"use client"
import React, { useEffect, useState } from "react";

const Page = () => {
  const [message, setMessage] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const query = await fetch('/api/test-page', {
          method: 'GET'
        })
        //const query = await fetch('/api/test-page');
        console.log('response from API', query)
        //setMessage(response)
      }
      getData()
    }, []);


  return <div>
    
    <h1>Message</h1>
    <div>
      
      {message.map((boo) => {
        return (
          <div key={boo.id}>
            <p>
              {boo.title}
            </p>
            </div>
        )
      })}
  
    </div>
  </div>;

  }
export default Page;
