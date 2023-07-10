import { SimpleUser, User } from "@/types";
import axios, { AxiosInstance } from "axios";

const headers = {
  "app-id": "63cd1cd766fd050934f194be",
  "Cache-Control": "no-cache",
};
const ENDPOINT = "https://dummyapi.io/data/v1/user";
const client: AxiosInstance = axios.create({ headers });
export const usersResource = {
  load: async (id: string): Promise<User> => {
    const response = await client.get(`${ENDPOINT}/${id}`, { headers });
    return response.data;
  },
  list: async (): Promise<SimpleUser[]> => {
    const response = await client.get(`${ENDPOINT}`, { headers });
    return response.data.data;
  },
};
