import express from "express";
import pg from "pg";
import cors from "cors";
import "dotenv/config";

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

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/note", async (req, res) => {
  const result = await db.query("select * from notes;");
  // console.log(result);
  res.send(result);
});

app.post("/api/addNote", async (req, res) => {
  // console.log(req.body);
  const input = req.body;
  db.query("INSERT INTO notes (note, notedate) VALUES ($1,$2)", [input.content, input.date]);
});

app.post("/api/deleteNote", async (req, res) => {
  const input = req.body;
  // console.log(req.body);
  db.query("DELETE FROM notes WHERE id=($1)", [input.id]);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
