import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../controllers/note.controller.js";

const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.put("/:todoId", updateNote);
router.delete("/:todoId", deleteNote);

export default router;
