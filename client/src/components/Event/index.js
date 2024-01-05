import React, { useState, useEffect } from "react";
import { formatDate } from "@fullcalendar/react";
import "../Modal/Modal.css";

import EditEvent from "../EditEvent";
import { sendApiRequest } from "../../helpers/api";

export default function Event({
  modal,
  setModal,
  toggleModal,
  eventData,
  eventId,
  clickedEvent,
}) {
  const [editMode, setEditMode] = useState(false); // Flag to track edit mode

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  useEffect(() => {
    if (modal && eventId !== undefined && eventData.length > 0) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [modal, eventId, eventData, clickedEvent, editMode]);

  const deleteEvent = async(e) => {
    e.preventDefault();
    let id = e.target.id;
    try {
      const url = `http://localhost:4000/api/events/${id}`;
      const method = "DELETE";
      await sendApiRequest(url, method);
      console.log("Event deleted successfully");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
    setModal(!modal);
    window.location.reload();
  };

  return (
    <>
      {editMode ? (
        <EditEvent
          clickedEvent={clickedEvent}
          onSave={handleSaveClick}
          onCancel={() => setEditMode(false)}
        />
      ) : (
        modal && (
          <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
              <div className="modal-container">
                <div className="heading">
                  <h2>{clickedEvent.title}</h2>
                  <button className="close-modal" onClick={toggleModal}>
                    X
                  </button>
                </div>

                <img
                  src={clickedEvent.thumbnail}
                  width={350}
                  height={300}
                  alt="new"
                />

                <div className="events">
                  <div className="time">
                    <b>Time: </b>{" "}
                    {formatDate(clickedEvent.start, {
                      hour: "numeric",
                      minute: "2-digit",
                    })}{" "}
                    -{" "}
                    {formatDate(clickedEvent.enddate, {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </div>

                  <div className="date">
                    <b>Date: </b>{" "}
                    {formatDate(clickedEvent.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>

                  <div className="location">
                    <b>Location: </b> {clickedEvent.location}
                  </div>

                  <div className="attendees">
                    <p><b>Attendees: ({clickedEvent.attendee_user_names.length})</b></p>
                    {clickedEvent.attendee_user_names.map((attendee, index) => (
                      <span key={index}> {attendee}</span>
                    ))}
                  </div>
                </div>

                <div className="edit-delete-btns">
                  <button
                    className="edit-btn"
                    onClick={handleEditClick}
                    id={clickedEvent.id}
                  >
                    EDIT
                  </button>
                  <button
                    className="delete-btn"
                    onClick={deleteEvent}
                    id={clickedEvent.id}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
