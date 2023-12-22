import React, { useState, useEffect } from "react";
import { formatDate } from '@fullcalendar/react'
import "./Modal.css";

export default function Modal({modal, setModal, toggleModal, eventData, eventId, clickedEvent}) {

  useEffect(() => {
    // Check if eventId and eventData are defined before accessing them
    if (modal && eventId !== undefined && eventData.length > 0) {
      document.body.classList.add('active-modal');
      // You can access eventId, eventData, and clickedEvent here and update the modal content
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal, eventId, eventData, clickedEvent]);

  const deleteEvent = (e) => {
    e.preventDefault();
    let id = e.target.id;
    console.log(id);
  
    fetch(`http://localhost:4000/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }
    })
    .then((res) => {
      if (res.ok === true) {
        console.log("Event deleted successfully");
      } else if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      } else {
        // Handle other status codes here
        return res.json();
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
    setModal(!modal)
    // window.location.reload();
  };

  return (
    <>
      {modal && (  //if modal is true it will show the modal, if not, it will return nothing at all
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
          <br></br>
            <h2>{clickedEvent.title}</h2>
            <img src={clickedEvent.thumbnail} width={350} height={300} alt="new" />
            <br></br>
            <br></br>
            <div></div>
              <div className="events">
              <b>Time:  </b>{formatDate(clickedEvent.start,{hour: 'numeric', minute: '2-digit'})} - {formatDate(clickedEvent.enddate,{hour: 'numeric', minute: '2-digit'})}
              <br></br>
              <b>Date: </b>{formatDate(clickedEvent.start, {year: 'numeric', month: 'short', day: 'numeric'})}
              <br></br>
              <b>Location: </b>{clickedEvent.location}
              <br></br>
              <b>id: </b>{clickedEvent.id}
              </div>
            <button className="edit-modal">EDIT</button>
            <button className="delete-modal" onClick={deleteEvent} id={clickedEvent.id} action="/create" method="POST">DELETE</button>
            <button className="close-modal" onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}