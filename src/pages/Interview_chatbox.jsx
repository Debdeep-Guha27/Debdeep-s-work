import React from "react";
import Chatbox from "../components/Chatbox";
import Form from "../components/Form";
import "../Css/Interview_chatbox.css";

const Interview_chatbox = () => {
  return (
    <div className="main-container">
      <Form />
      <Chatbox />
    </div>
  );
};

export default Interview_chatbox;