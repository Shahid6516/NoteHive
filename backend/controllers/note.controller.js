import { Note } from "../models/note.model.js";

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const note = new Note({ title, description });
    note.save();

    return res.status(200).json({
      success: true,
      message: "Notes created successfully",
      todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    console.log(notes);

    return res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    const { title, description } = req.body;

    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    return res.status(200).json({
      success: true,
      note,
      message: "Note Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    await Note.findByIdAndDelete(noteId);
    return res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


