import client from "../database/postgre";

export interface INotes {
  id: number;
  userId: number;
  title: string;
  description: string;
}

export type NotesInsertData = Omit<INotes, "id">;

export async function findByUserIdAndTitle(userId: number, title: string) {
  return await client.notes.findFirst({
    where: {
      userId,
      title,
    },
  });
}

export async function insert(newNote: NotesInsertData) {
  return await client.notes.create({
    data: { ...newNote },
  });
}

export async function read(userId: number) {
  return await client.notes.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
    },
  });
}

export async function readById(id: number) {
  return await client.notes.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteOne(id: number) {
  return await client.notes.delete({
    where: {
      id,
    },
  });
}
