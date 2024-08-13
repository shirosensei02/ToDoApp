import express from "express";
import users from "./users.js";
import pg from "pg";

const app = express();
const port = process.env.PORT || 9000;
const db = new pg.Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DATABASE,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
});
db.connect();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/user", (req, res) => {
  res.send(users);
});

app.get("/api/note", (req, res) => {});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
