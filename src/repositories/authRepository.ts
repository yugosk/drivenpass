import client from "../database/postgre";

export interface IUser {
  id: number;
  email: string;
  password: string;
}

export type UserInsertData = Omit<IUser, "id">;

export async function insert(user: Omit<IUser, "id">): Promise<void> {
  const { email, password } = user;
  await client.users.create({
    data: {
      email,
      password,
    },
  });
}

export async function findByEmail(email: string) {
  return await client.users.findUnique({
    where: {
      email,
    },
  });
}
