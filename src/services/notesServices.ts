import {
  findByUserIdAndTitle,
  NotesInsertData,
  insert,
  read,
  readById,
  deleteOne,
} from "../repositories/notesRepository";

export async function newNote(note: NotesInsertData) {
  try {
    const isNew = await findByUserIdAndTitle(note.userId, note.title);
    if (isNew) {
      throw "title_in_use";
    }
  } catch (err: ErrorEvent | any) {
    throw err;
  }

  try {
    await insert({ ...note });
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function userNotes(userId: number) {
  try {
    const notes = await read(userId);
    return notes;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function singleNotes(id: number, userId: number) {
  try {
    const note = await readById(id);

    if (!note) {
      throw "notes_not_found";
    }

    if (note.userId !== userId) {
      throw "err_unauthorized";
    }

    const response = {
      id: note.id,
      title: note.title,
      description: note.description,
    };
    return response;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function deleteNote(id: number, userId: number) {
  try {
    const note = await readById(id);

    if (!note) {
      throw "note_not_found";
    }

    if (note.userId !== userId) {
      throw "err_unauthorized";
    }

    await deleteOne(id);
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}
