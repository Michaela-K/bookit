import React, { useState, useEffect } from "react";
import { formatDate } from '@fullcalendar/react'
import "./Modal.css";
import EditEvent from "../EditEvent"


export default function Modal({children, modal, setModal, toggleModal, eventData, eventId, clickedEvent}) {


  return (
    <>
    {modal && 
     children
    }
    </>
  );
}