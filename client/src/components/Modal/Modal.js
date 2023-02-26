import React, { useState } from "react";
import { formatDate } from '@fullcalendar/react'
import "./Modal.css";

export default function Modal({modal, setModal, toggleModal, eventsData, eventId}) {

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const deleteEvent = async (e, eventId, eventsData)=>{
    e.preventDefault();
    // console.log(eventsData)
    // const id =eventsData[eventId].id;
    let id = e.target.id;
    console.log(id)
    console.log(eventId)

    // fetch(`http://localhost:4000/api/events/${id}`,{
    //   method:'DELETE',
    //   headers: {"Content-Type": "application/json",
    //   'Access-Control-Allow-Origin': '*'}
    // })
    // const data = await res.json()
    // console.log(data)
    // console.log(eventsData)
    // window.location.reload()
  }

  return (
    <>
      {modal && (  //if modal is true it will show the modal, if not, it will return nothing at all
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
          <br></br>
            <h2>{eventsData[eventId].title}</h2>
            <img src={eventsData[eventId].thumbnail} width={350} height={300} alt="new" />
            <br></br>
            <br></br>
            <div></div>
              <div className="events">
              <b>Time:  </b>{formatDate(eventsData[eventId].start,{hour: 'numeric', minute: '2-digit'})} - {formatDate(eventsData[eventId].enddate,{hour: 'numeric', minute: '2-digit'})}
              <br></br>
              <b>Date: </b>{formatDate(eventsData[eventId].start, {year: 'numeric', month: 'short', day: 'numeric'})}
              <br></br>
              <b>Location: </b>{eventsData[eventId].location}
              <br></br>
              <b>id: </b>{eventsData[eventId].id}
              </div>
            <button className="edit-modal">EDIT</button>
            <button className="delete-modal" onClick={deleteEvent} id={eventsData[eventId].id} action="/create" method="POST">DELETE</button>
            <button className="close-modal" onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}