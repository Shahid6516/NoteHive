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
    console.log(error);
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
    console.log(error);
  }
};



export const updateNote = async (req, res) => {};

export const deleteNote = async (req, res) => {};
3