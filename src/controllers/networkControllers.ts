import { Request, Response } from "express";
import {
  newNetwork,
  singleNetwork,
  userNetworks,
  deleteNetwork as deleteOne,
} from "../services/networksServices";

import { errorHandler } from "../services/errorHandler";

export async function postNetwork(req: Request, res: Response) {
  const user = res.locals.user;
  const network = { ...req.body, userId: user.id };
  try {
    await newNetwork(network);
    res.status(201).send("Network created successfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getNetworks(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  try {
    const networks = await userNetworks(userId);
    res.send(networks);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getNetworkById(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    const network = await singleNetwork(id, userId);
    res.send(network);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function deleteNetwork(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    await deleteOne(id, userId);
    res.status(200).send("Network deleted succesfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}
