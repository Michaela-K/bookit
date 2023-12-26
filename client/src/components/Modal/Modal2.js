import React from "react";
import "./Modal.css";


export default function Modal({children, modal, setModal, toggleModal, eventData, eventId, clickedEvent}) {


  return (
    <>
    {modal && 
     children
    }
    </>
  );
}