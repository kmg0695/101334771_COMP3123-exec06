const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoteSchema = new Schema({
  noteTitle: {
    type: String,
    require: true,
  },
  noteDescription: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NoteSchema);
