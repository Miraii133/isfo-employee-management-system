"use client"
import React, { useEffect, useState } from "react";
import { analyticsId } from "../../../next.config";

const Page = () => {
  const [message, setMessage] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const query = await fetch('/api/test-page')
        //const query = await fetch('/api/test-page');
        //const response = await query.json();
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
