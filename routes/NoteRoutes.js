const express = require("express");
const NoteModel = require("../models/NotesModel");

const app = express.Router();

app.post("/notes", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  try {
    const newNote = new NoteModel(req.body);
    const note = await newNote.save();
    return res.status(201).send(note);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.get("/notes", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  try {
    const allNotes = await NoteModel.find();
    return res.status(200).send(allNotes);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.get("/notes/:noteId", async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  try {
    const foundNote = await NoteModel.findById(req.params.noteId);
    if (!foundNote) {
      return res.status(400).send({ message: "Note not found" });
    }
    return res.status(200).send(foundNote);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.put("/notes/:noteId", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  try {
    const updateNote = await NoteModel.findByIdAndUpdate(
      req.params.noteId,
      req.body
    );
    if (!updateNote) {
      return res.status(400).send({ message: "Note not found" });
    }
    return res.status(200).send(updateNote);
  } catch (error) {
    return res.status(400).send(error);
  }
});

app.delete("/notes/:noteId", async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  try {
    const deleteNote = await NoteModel.findByIdAndDelete(req.params.noteId);
    if (!deleteNote) {
      return res.status(400).send({ message: "Note not found" });
    }
    return res.status(200).send(deleteNote);
  } catch (error) {
    return res.status(400).send(error);
  }
});

module.exports = app;
