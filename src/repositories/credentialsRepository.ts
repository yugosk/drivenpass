import client from "../database/postgre";

export interface ICredentials {
  id: number;
  userId: number;
  title: string;
  url: string;
  username: string;
  password: string;
}

export type CredentialsInsertData = Omit<ICredentials, "id">;

export async function findByUserIdAndTitle(userId: number, title: string) {
  return await client.credentials.findFirst({
    where: {
      userId,
      title,
    },
  });
}

export async function insert(newCredential: CredentialsInsertData) {
  return await client.credentials.create({
    data: { ...newCredential },
  });
}

export async function read(userId: number) {
  return await client.credentials.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      url: true,
      username: true,
      password: true,
    },
  });
}

export async function readById(id: number) {
  return await client.credentials.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteOne(id: number) {
  return await client.credentials.delete({
    where: {
      id,
    },
  });
}
