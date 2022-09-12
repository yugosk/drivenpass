import {
  NetworksInsertData,
  insert,
  read,
  readById,
  deleteOne,
} from "../repositories/networkRepository";

import { encryptPassword, decryptPassword } from "./encryptionServices";

export async function newNetwork(network: NetworksInsertData) {
  try {
    const password = encryptPassword(network.password);
    await insert({ ...network, password });
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function userNetworks(userId: number) {
  try {
    const networks = await read(userId);

    for (let value of networks) {
      value.password = decryptPassword(value.password);
    }

    return networks;
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function singleNetwork(id: number, userId: number) {
  try {
    const network = await readById(id);

    if (!network) {
      throw "network_not_found";
    }

    if (network.userId !== userId) {
      throw "err_unauthorized";
    }

    return { ...network, password: decryptPassword(network.password) };
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}

export async function deleteNetwork(id: number, userId: number) {
  try {
    const network = await readById(id);

    if (!network) {
      throw "credential_not_found";
    }

    if (network.userId !== userId) {
      throw "err_unauthorized";
    }

    await deleteOne(id);
  } catch (err: ErrorEvent | any) {
    throw err;
  }
}
