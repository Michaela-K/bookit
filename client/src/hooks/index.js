import { useState, useEffect } from 'react'

export const useEvents = () => {
    const [eventData, setEventData] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("http://localhost:4000/api/events");
          const data = await res.json();
          setEventData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render
    
    // useEffect(() => {
    //   console.log("Updated eventData:", eventData);
    // }, [eventData]);

    return eventData;
};