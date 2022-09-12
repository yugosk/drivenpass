import client from "../database/postgre";

export interface INetworks {
  id: number;
  userId: number;
  title: string;
  name: string;
  password: string;
}

export type NetworksInsertData = Omit<INetworks, "id">;

export async function insert(newNetwork: NetworksInsertData) {
  return await client.networks.create({
    data: { ...newNetwork },
  });
}

export async function read(userId: number) {
  return await client.networks.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      title: true,
      name: true,
      password: true,
    },
  });
}

export async function readById(id: number) {
  return await client.networks.findUnique({
    where: {
      id,
    },
  });
}

export async function deleteOne(id: number) {
  return await client.networks.delete({
    where: {
      id,
    },
  });
}
