import React, { useState, useEffect } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { ConnectingAirportsOutlined } from '@mui/icons-material'
import Event from "../Event"

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Modal2 from '../Modal/Modal2';
dayjs.extend(customParseFormat);


const MyEvents = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
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
  
  // let calendarEl = document.getElementById('calendar');

  // let calendar = new Calendar(calendarEl,{
  //   events: "http://localhost:4000/api/events"
  //   });

  // let event = calendar.getEventById('a') // an event object!
  // let start = event.start
 
  const renderSidebar=()=>{
    return (
      <div className='demo-app-sidebar'>
        <div className='demo-app-sidebar-section'>
          {/* <h2>Instructions</h2>
          <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul> */}
        </div>
        <div className='demo-app-sidebar-section'>
          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={handleWeekendsToggle}
            ></input>
            toggle weekends
          </label>
        </div>
        <div className='demo-app-sidebar-section'>
          <h4>All Events ({eventData.length})</h4>
          <ul>
            {/* {eventData.map(renderSidebarEvent)} */}
          </ul>
        </div>
      </div>
    )
  }
  
  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }
  
  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    console.log(selectInfo)
    console.log(selectInfo.view)
    console.log(calendarApi)
    
    calendarApi.unselect() // clear date selection
    
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      }, setCurrentEvents(title)); 
      console.log(currentEvents.currentEvents)
      // console.log(events)
      // const obj = {
      //   id: createEventId(),
      //   title,
      //   start: selectInfo.startStr,
      //   end: selectInfo.endStr,
      //   allDay: selectInfo.allDay};
      //   console.log(obj)
      //   console.log(currentEvents)
      // setCurrentEvents([...currentEvents, obj]);
      // setCurrentEvents(calendarApi.getEventById("1"))
      // setCurrentEvents(prevCurrentEvents =>  prevCurrentEvents + title);
    }
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
    let endDate = eventInfo.event._def.extendedProps.enddate;
    let end = dayjs('1:02:03 PM -05:00', 'H:mm:ss A Z');
    // console.log({end}.end.$d)
  return (
    <>
    <div>
      <u><b>{eventInfo.timeText}</b></u>
      <br></br>
      {/* <b>{eventInfo.event._def.extendedProps.enddate}</b> */}
      <b>{eventInfo.event.title}</b>
      <br></br>
      <i>{eventInfo.event._def.extendedProps.location}</i>
      <br></br>
      <i>{eventInfo.event.title}</i>
      {/* <i>{eventInfo.event.title, console.log(eventInfo.event._def.extendedProps)}</i> */}
    </div>
    </>
  )
  }
  
  // function renderSidebarEvent(event) {
  // return (
  //   <li key={event.id}>
  //     <b>{event.title}</b> : 
  //     <i>{formatDate(event.start, {year: 'numeric', month: 'short', day: 'numeric'})}</i>
  //   </li>)
  // }
  

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
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={weekendsVisible}
            // events={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            events={eventData}
            // select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          //  eventInfo={eventInfo}
          />
        </div>
      </div>
    </>
  )
}



export default MyEvents