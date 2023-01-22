import Axios from "axios";
import { ConfigEntityApi } from "./models/configuration.model";

const configListUrl = "/api/Configuration";

export const getConfiguration = async (): Promise<ConfigEntityApi> => {
  const { data } = await Axios.get<ConfigEntityApi>(`${configListUrl}`);
  return data;
};
