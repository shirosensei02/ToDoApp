import React, {useState} from "react";
import "./styles/App.css";

function Note(props) {
  return (
    <div className="note">
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
