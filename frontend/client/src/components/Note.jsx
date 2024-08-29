import React, { useState } from "react";
import "./styles/App.css";

function Note(props) {
  const [content, setContent] = useState("");

  function handleChange() {
    setContent(props.content);
  }

  function handleClick(){
    
  }

  return (
    <div className="note">
      <p>{props.date}</p>
      <p value={props.content} onChange={handleChange}>
        {props.content}
      </p>
      <button
        onClick={async () => {
          props.deleteNote(props.id);
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
