import React from "react";
import "./Modal.css";

export default function Modal({
  children,
  modal,
}) {
  return <>{modal && children}</>;
}
