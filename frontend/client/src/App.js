import React, {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState();

  function getUser() {
    fetch("/api/user")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
      {users.map((user) => {
        return (
          <div>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
