import { Router, IRouter } from "express";
import { postCredential } from "../controllers/credentialsControllers";
import {
  deleteNotes,
  getNotes,
  getNotesById,
} from "../controllers/notesControllers";
import { validateToken } from "../middlewares/authMiddleware";
import validateSchema from "../middlewares/schemaMiddleware";
import noteSchema from "../schemas/notesSchema";

const notesRouter: IRouter = Router();

notesRouter.post(
  "/notes",
  validateSchema(noteSchema),
  validateToken,
  postCredential
);

notesRouter.get("/notes", validateToken, getNotes);

notesRouter.get("/notes/:id", validateToken, getNotesById);

notesRouter.delete("/notes/:id", validateToken, deleteNotes);

export default notesRouter;
