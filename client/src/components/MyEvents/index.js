import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Event from "../Event"

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Modal2 from '../Modal/Modal2';
dayjs.extend(customParseFormat);


const MyEvents = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [clickedEvent, setClickedEvent] = useState([]);
  const [eventId, setEventId]=useState(0)
  const [eventData, setEventData] = useState([]);
  // Modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/events');
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once after the initial render
  
  const renderSidebar=()=>{
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
        </div>
        <div className='demo-app-sidebar-section'>
          <h4>All Events ({eventData.length})</h4>
          <ul>
          </ul>
        </div>
      </div>
    )
  }
  
  const handleEventClick = (e) => {
    const clickedEventId = Number(e.event._def.publicId);
    const clickedEvent = eventData.find(event => event.id === clickedEventId); // Find the clicked event by ID
    setEventId(clickedEventId); //this is being set to undefined
    setClickedEvent(clickedEvent); //this is also being set to undefined
    setModal(!modal);
  };

  useEffect(() => {
    console.log("Updated eventId:", eventId);
    console.log("Updated clickedEvent:", clickedEvent);
  }, [eventId, clickedEvent]);
  
  const handleEvents = (events) => {
    setCurrentEvents({currentEvents: events
    })
  }
  
  function renderEventContent(eventInfo) {
  return (
    <>
    <div>
      <u><b>{eventInfo.timeText}</b></u>
      <br></br>
      <b>{eventInfo.event.title}</b>
      <br></br>
      <i>{eventInfo.event._def.extendedProps.location}</i>
      <br></br>
      <i>{eventInfo.event.title}</i>
    </div>
    </>
  )
  }  

  return (
    <>
      <div className='demo-app'>
        {renderSidebar()}
        <div className='demo-app-main'>
          <Modal2 modal={modal} setModal={setModal} toggleModal={toggleModal}>
            <Event modal={modal} setModal={setModal} toggleModal={toggleModal} eventData={eventData} eventId={eventId} clickedEvent={clickedEvent}/>
          </Modal2>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'title',
              right: 'prev,next today',
            }}
            initialView='dayGridMonth'
            height={750}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={eventData}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} 
          />
        </div>
      </div>
    </>
  )
}



export default MyEvents