import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/note.controller.js";

const router = express.Router();



// note.routes.js
router.get("/", getAllNotes);
router.post("/create", createNote);
router.put("/:noteId", updateNote);      // update note
router.delete("/:noteId", deleteNote);   // delete note


export default router;
