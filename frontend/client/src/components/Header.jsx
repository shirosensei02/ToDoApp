import React, {useState} from "react";
import Popup from "./Popup";
import "./styles/App.css";

function Header(props) {
  const [addClick, setAddClick] = useState(false);

  function hasClick() {
    setAddClick(true);
  }

  function close() {
    setAddClick(false);
  }

  return (
    <div>
      <header>
        <h1>Todo</h1>
        <button type="button" class="btn btn-primary btn-sm" onClick={hasClick}>
          Add
        </button>
        {addClick && <Popup closeClick={close} addNoteList={props.addNoteList} />}
      </header>
    </div>
  );
}

export default Header;
