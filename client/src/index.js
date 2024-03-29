import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Events from "./components/Events/index";
import EventLink from "./components/EventLink";
import MyEvents from "./components/MyEvents/index";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Navbar from "./components/Navbar";
import { TodoContextProvider } from '../src/context';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<Events />} /> {/*    /create     */}
      <Route path="/events/:eventId" element={<EventLink />} />
      <Route path="/myevents" element={<MyEvents />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  </TodoContextProvider>
);
