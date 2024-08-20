import React from "react";
import "./styles/App.css";

function Note(props) {
  return (
    <div className="note">
      <p>{props.date}</p>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.deleteNote(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
