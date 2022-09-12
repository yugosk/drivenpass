import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as authRepository from "../repositories/authRepository";
import * as encryptionServices from "../services/encryptionServices";

dotenv.config();
const jwtKey = process.env.JWTKEY || "jwtkey";

export async function newUser(user: authRepository.UserInsertData) {
  try {
    const userEmail = await authRepository.findByEmail(user.email);
    if (userEmail) {
      throw "email_in_use";
    }

    const password = encryptionServices.hashPassword(user.password);

    await authRepository.insert({ ...user, password });
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function login(user: authRepository.UserInsertData) {
  try {
    const userCredentials = await authRepository.findByEmail(user.email);

    if (!userCredentials) {
      throw "email_not_found";
    }

    const validatePassword = encryptionServices.compareHash(
      user.password,
      userCredentials.password
    );

    if (!validatePassword) {
      throw "incorrect_password";
    }

    const tokenData = { id: userCredentials.id };
    const token = jwt.sign(tokenData, jwtKey, { expiresIn: "1h" });
    return token;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}
