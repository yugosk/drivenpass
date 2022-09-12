import { Request, Response } from "express";
import {
  newCard,
  singleCard,
  userCards,
  deleteCard as deleteOne,
} from "../services/cardsServices";

import { errorHandler } from "../services/errorHandler";

export async function postCard(req: Request, res: Response) {
  const user = res.locals.user;
  const card = { ...req.body, userId: user.id };
  try {
    await newCard(card);
    res.status(201).send("Credential created successfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getCards(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  try {
    const cards = await userCards(userId);
    res.send(cards);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getCardById(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    const card = await singleCard(id, userId);
    res.send(card);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function deleteCard(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    await deleteOne(id, userId);
    res.status(200).send("Credential deleted succesfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}
