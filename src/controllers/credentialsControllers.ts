import { Request, Response } from "express";
import {
  newCredential,
  singleCredential,
  userCredentials,
  deleteCredential as deleteOne,
} from "../services/credentialsServices";
import { errorHandler } from "../services/errorHandler";

export async function postCredential(req: Request, res: Response) {
  const user = res.locals.user;
  const credential = { ...req.body, userId: user.id };
  try {
    await newCredential(credential);
    res.status(201).send("Credential created successfully");
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getCredentials(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  try {
    const credentials = await userCredentials(userId);
    res.send(credentials);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function getCredentialById(req: Request, res: Response) {
  const { id: userId } = res.locals.user;
  const id = Number(req.params.id);

  try {
    const credential = await singleCredential(id, userId);
    res.send(credential);
  } catch (err: ErrorEvent | any) {
    const error = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function deleteCredential(req: Request, res: Response) {
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
