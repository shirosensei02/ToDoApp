import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./App.css";

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

  return (
    <div>
      <Header />
      <Note />

      <Footer />
    </div>
  );
}

export default App;
