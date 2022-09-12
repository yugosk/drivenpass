import client from "../database/postgre";

type CardTypes = "credit" | "debit" | "both";

export interface ICards {
  id: number;
  userId: number;
  title: string;
  number: string;
  name: string;
  cvv: string;
  expirationDate: Date;
  password: string;
  isVirtual: boolean;
  type: CardTypes;
}

export type CardsInsertData = Omit<ICards, "id">;

export async function findByUserIdAndTitle(userId: number, title: string) {
  return await client.cards.findFirst({
    where: {
      userId,
      title,
    },
  });
}

export async function insert(newCard: CardsInsertData) {
  return await client.cards.create({
    data: { ...newCard },
  });
}

export async function read(userId: number) {
  return await client.cards.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      number: true,
      name: true,
      cvv: true,
      expirationDate: true,
      password: true,
      isVirtual: true,
      type: true,
    },
  });
}

export async function readById(id: number) {
  return await client.cards.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteOne(id: number) {
  return await client.cards.delete({
    where: {
      id,
    },
  });
}
