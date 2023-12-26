import React, { useState, useEffect } from "react";
import { formatDate } from '@fullcalendar/react'
import "./Modal.css";
import EditEvent from "../EditEvent"


export default function Modal({children, modal, setModal, toggleModal, eventData, eventId, clickedEvent}) {

  const [editMode, setEditMode] = useState(false); // Flag to track edit mode

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  useEffect(() => {
    if (modal && eventId !== undefined && eventData.length > 0) {
      document.body.classList.add('active-modal');
    } else {
      document.body.classList.remove('active-modal');
    }
  }, [modal, eventId, eventData, clickedEvent]);

  const deleteEvent = (e) => {
    e.preventDefault();
    let id = e.target.id;
  
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
        return res.json();
      }
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
    setModal(!modal)
    window.location.reload();
  };

  return (
    <>
    {editMode ? 

      (
        <EditEvent clickedEvent={clickedEvent} onSave={handleSaveClick} onCancel={() => setEditMode(false)}/>
      )

      :

      (
      
        modal && 
          (
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
              <button className="edit-modal" onClick={handleEditClick} id={clickedEvent.id}>EDIT</button>
              <button className="delete-modal" onClick={deleteEvent} id={clickedEvent.id} >DELETE</button>
              <button className="close-modal" onClick={toggleModal}>X</button>
              </div>
              </div>
          )
      )
    }
    </>
  );
}