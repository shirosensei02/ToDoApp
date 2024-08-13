import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles/App.css";

function App() {
  // const [users, setUsers] = useState([]);

  // function getUser() {
  //   fetch("/api/user")
  //     .then((res) => res.json())
  //     .then((json) => setUsers(json));
  // }

  // useEffect(() => {
  //   getUser();
  // }, []);

  const [noteList, setNoteList] = useState([]);

  function addNoteList(note) {
    setNoteList((prevList) => {
      return [...prevList, note];
    });
  }

  function deleteNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((note, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header addNoteList={addNoteList} />
      {noteList.map((note, index) => {
        return <Note key={index} id={index} content={note} deleteNote={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
