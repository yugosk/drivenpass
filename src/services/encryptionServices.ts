import bcrypt from "bcrypt";
import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();
const cryptrKey = process.env.CRYPTRKEY || "cryptrkey";

const cryptr = new Cryptr(cryptrKey);

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10);
}

export function compareHash(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}

export function encryptPassword(password: string) {
  return cryptr.encrypt(password);
}

export function decryptPassword(password: string) {
  return cryptr.decrypt(password);
}
