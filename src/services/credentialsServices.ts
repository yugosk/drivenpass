import {
  findByUserIdAndTitle,
  CredentialsInsertData,
  insert,
  read,
  readById,
  deleteOne,
} from "../repositories/credentialsRepository";

import { encryptPassword, decryptPassword } from "./encryptionServices";

export async function newCredential(credential: CredentialsInsertData) {
  try {
    const isNew = await findByUserIdAndTitle(
      credential.userId,
      credential.title
    );
    if (isNew) {
      throw "title_in_use";
    }
  } catch (err: ErrorEvent | any) {
    throw err;
  }

  try {
    const password = encryptPassword(credential.password);
    await insert({ ...credential, password });
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function userCredentials(userId: number) {
  try {
    const credentials = await read(userId);

    for (let value of credentials) {
      value.password = decryptPassword(value.password);
    }

    return credentials;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function singleCredential(id: number, userId: number) {
  try {
    const credential = await readById(id);

    if (!credential) {
      throw "credential_not_found";
    }

    if (credential.userId !== userId) {
      throw "err_unauthorized";
    }
    const response = {
      id: credential.id,
      title: credential.title,
      url: credential.url,
      username: credential.username,
      password: decryptPassword(credential.password),
    };
    return response;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function deleteCredential(id: number, userId: number) {
  try {
    const credential = await readById(id);

    if (!credential) {
      throw "credential_not_found";
    }

    if (credential.userId !== userId) {
      throw "err_unauthorized";
    }

    await deleteOne(id);
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}
