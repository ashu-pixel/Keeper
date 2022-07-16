const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    notes : [
        {
          title: {
            type: String,
          },
          note: {
            type: String,
             
          },
        },
      ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Note", NoteSchema);