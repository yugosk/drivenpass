import {
  findByUserIdAndTitle,
  CardsInsertData,
  insert,
  read,
  readById,
  deleteOne,
} from "../repositories/cardsRepository";

import { encryptPassword, decryptPassword } from "./encryptionServices";

export async function newCard(card: CardsInsertData) {
  try {
    const isNew = await findByUserIdAndTitle(card.userId, card.title);
    if (isNew) {
      throw "title_in_use";
    }
  } catch (err: ErrorEvent | any) {
    throw err;
  }

  try {
    const password = encryptPassword(card.password);
    await insert({ ...card, password });
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function userCards(userId: number) {
  try {
    const cards = await read(userId);

    for (let value of cards) {
      value.password = decryptPassword(value.password);
    }

    return cards;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function singleCard(id: number, userId: number) {
  try {
    const card = await readById(id);

    if (!card) {
      throw "card_not_found";
    }

    if (card.userId !== userId) {
      throw "err_unauthorized";
    }

    return { ...card, password: decryptPassword(card.password) };
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function deleteCard(id: number, userId: number) {
  try {
    const card = await readById(id);

    if (!card) {
      throw "card_not_found";
    }

    if (card.userId !== userId) {
      throw "err_unauthorized";
    }

    await deleteOne(id);
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}
