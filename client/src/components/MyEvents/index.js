import React, { useState, useEffect, useContext } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Event from "../Event";
import Modal2 from "../Modal/Modal2";
import "./MyEvents.css";
import { TodoContext } from "../../context";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
dayjs.extend(utc);

const MyEvents = () => {
  const calendarRef = React.useRef();
  const {
    eventData,
    clickedEvent,
    setClickedEvent,
    currentEvents,
    setCurrentEvents,
  } = useContext(TodoContext);
  const [eventId, setEventId] = useState(0);
  // Modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEventClick = (e) => {
    const clickedEventId = Number(e.event._def.publicId);
    const clickedEvent = eventData.find((event) => event.id === clickedEventId); // Find the clicked event by ID
    setEventId(clickedEventId);
    setClickedEvent(clickedEvent);
    setModal(!modal);
  };

  useEffect(() => {
    // console.log("Updated eventId:", eventId);
    // console.log("Updated clickedEvent:", clickedEvent);
  }, [eventId, clickedEvent]);

  const handleEvents = (events) => {
    setCurrentEvents({ currentEvents: events });
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <div className="eventcontainer">
          <span className="eventStart">
            <div className="dot"></div>
            {eventInfo.timeText}
            <b className="title">{eventInfo.event.title}</b>
          </span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="app">
        <Modal2 modal={modal} setModal={setModal} toggleModal={toggleModal}>
          <Event
            modal={modal}
            setModal={setModal}
            toggleModal={toggleModal}
            eventData={eventData}
            eventId={eventId}
            clickedEvent={clickedEvent}
          />
        </Modal2>
        <div className="app-main" style={{ padding: "0px 3vh" }}>
          <h4>All Events ({eventData.length})</h4>
          <FullCalendar 
            timeZone="local"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "title",
              right: "prev,next today",
            }}
            initialView="dayGridMonth"
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
  );
};

export default MyEvents;
