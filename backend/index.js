const express = require("express");
const app = express();
const { users } = require("./lib/users");

const http = require("http").Server(app);
const cors = require("cors");

const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/comments", (req, res) => {
  // TODO: implement
  res.json([]);
});

app.post("/comments", async (req, res) => {
  // TODO: implement
  res.json(null);
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
