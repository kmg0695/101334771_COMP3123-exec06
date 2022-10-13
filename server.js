/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/NoteRoutes");

const DB_URL =
  "mongodb+srv://labs_fullstack:tWCYcpZnK4ptLmS5@book.tsm7ref.mongodb.net/gbc_fullstack_labs?retryWrites=true&w=majority";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use("/api/v1", noteRoutes);

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});
