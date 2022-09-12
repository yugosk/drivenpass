import { Request, Response } from "express";
import { IError, errorHandler } from "../services/errorHandler";
import { UserInsertData } from "../repositories/authRepository";
import * as authServices from "../services/authServices";

export async function createUser(req: Request, res: Response) {
  const newUser: UserInsertData = req.body;

  try {
    await authServices.newUser(newUser);
    res.status(201).send("User registered succesfully");
  } catch (err: ErrorEvent | any) {
    const error: IError = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}

export async function userLogin(req: Request, res: Response) {
  const userData: UserInsertData = req.body;

  try {
    const token = await authServices.login(userData);

    res.status(200).send(token);
  } catch (err: ErrorEvent | any) {
    const error: IError = errorHandler(err);
    res.status(error.code).send(error.message);
  }
}
