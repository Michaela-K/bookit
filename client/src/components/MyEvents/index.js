import React, { useState } from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { ConnectingAirportsOutlined } from '@mui/icons-material'

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);


const MyEvents = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);

  const [events, setEvents] = useState(async() => {
    const res = await fetch('http://localhost:4000/api/events');
    const data = await res.json();
    console.log(res)
    console.log(data)
    console.log(INITIAL_EVENTS)
    setEvents(data)

    return data;
})

  
  const handleEvents = (events) => {
    setCurrentEvents({currentEvents: events
    })
  }
  
  function renderEventContent(eventInfo) {
    let endDate = eventInfo.event._def.extendedProps.enddate;
    let end = dayjs('1:02:03 PM -05:00', 'H:mm:ss A Z');
    console.log({end}.end.$d)
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
    </div>
    </>
  )
  }

  return (
    <>
      <div className='demo-app'>
        <div className='demo-app-main'>
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
            events={events}
            eventContent={renderEventContent} // custom render function
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          />
        </div>
      </div>
    </>
  )
}



export default MyEvents