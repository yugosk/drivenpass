import { Request, Response } from "express";
import {
  newNote,
  singleNotes,
  userNotes,
  deleteNote as deleteOne,
} from "../services/notesServices";
import { errorHandler } from "../services/errorHandler";

export async function postNotes(req: Request, res: Response) {
  const user = res.locals.user;
  const note = { ...req.body, userId: user.id };
  try {
    await newNote(note);
    res.status(201).send("Credential created successfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getNotes(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  try {
    const notes = await userNotes(userId);
    res.send(notes);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getNotesById(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    const notes = await singleNotes(id, userId);
    res.send(notes);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function deleteNotes(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    await deleteOne(id, userId);
    res.status(200).send("Notes deleted succesfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}
