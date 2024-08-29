import React, {useState} from "react";
import "./styles/Popup.css";

function Popup(props) {
  const [note, setNote] = useState({});

  function handleInput(e) {
    // console.log(e.target.value);
    // setNote(e.target.value);

    // console.log(note);
    const {name, value} = e.target;
    setNote((prevObj) => {
      return {...prevObj, [name]: value};
    });
  }

  function handleAdd(event) {
    props.addNoteList(note);
    props.closeClick();
    setNote({
      content: "",
      date: "",
    });
    // console.log(note.content);
    event.preventDefault();
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleInput}
          value={note.content}
        />
        {/* <div className="dateAndClose"> */}
        <input
          className="dateInput"
          type="date"
          name="date"
          onChange={handleInput}
          // value={note.date}
        ></input>
        <button className="addBtn" onClick={handleAdd}>
          Add
        </button>
        <button className="closeBtn" onClick={props.closeClick}>
          Close
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Popup;
