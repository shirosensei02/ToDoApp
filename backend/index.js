import express from "express";

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/user", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
