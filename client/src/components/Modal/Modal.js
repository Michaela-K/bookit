import React, { useState } from "react";
import { formatDate } from '@fullcalendar/react'
import "./Modal.css";

export default function Modal({modal, setModal, toggleModal, eventsData, publicId}) {

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (  //if modal is true it will show the modal, if not, it will return nothing at all
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
          <br></br>
            <h2>{eventsData[publicId].title}</h2>
            <img src={eventsData[publicId].thumbnail} width={350} height={300} alt="new" />
            <br></br>
            <br></br>
            <div></div>
            {/* {eventsData.map((event) => ( */}
              <div className="events">
              <b>Time:  </b>{formatDate(eventsData[publicId].start,{hour: 'numeric', minute: '2-digit'})} - {formatDate(eventsData[publicId].enddate,{hour: 'numeric', minute: '2-digit'})}
              <br></br>
              <b>Date: </b>{formatDate(eventsData[publicId].start, {year: 'numeric', month: 'short', day: 'numeric'})}
              <br></br>
              <b>Location: </b>{eventsData[publicId].location}
              <br></br>
              </div>
            {/* ))} */}
            <button className="edit-modal">EDIT</button>
            <button className="delete-modal">DELETE</button>
            <button className="close-modal" onClick={toggleModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}