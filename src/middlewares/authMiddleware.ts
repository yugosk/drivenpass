import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const jwtKey = process.env.JWTKEY || "jwtkey";

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send("Invalid token");
  }

  try {
    const user = jwt.verify(token, jwtKey);
    res.locals.user = user;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
}
