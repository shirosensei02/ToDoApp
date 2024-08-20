import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./styles/App.css";

function App() {
  const [noteList, setNoteList] = useState([]);

  function getNotes() {
    fetch("/api/note")
      .then((res) => res.json())
      .then((json) => setNoteList(json.rows));
  }

  useEffect(() => {
    getNotes();
    // console.log(noteList);
  }, []);

  async function addNoteList(note) {
    // console.log(note);
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(note),
    };
    await fetch("/api/addNote", requestOptions);
    getNotes();
    // setNoteList((prevList) => {
    //   return [...prevList, note];
    // });
  }

  function deleteNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((note, index) => {
        return id !== index;
      });
    });
  }

  function dateSubstring(str) {
    const date = new Date(str);
    console.log(date.toLocaleDateString());
    return date.toLocaleDateString();
  }

  return (
    <div>
      <Header addNoteList={addNoteList} />
      {noteList.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            content={note.note}
            date={dateSubstring(note.notedate)}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
