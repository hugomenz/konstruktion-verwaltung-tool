// TODO: Find a solution to store allProjects globally, maybe in a ContextProvider or something like that...

import Axios from "axios";
import { ConfigEntityApi, PrioConfigEntityApi, TypeConfigEntityApi } from "./filter-options.api-model";

const apiUrl = "http://localhost:3000";
const configListUrl = "/configuration";

export const getAllConfigurationList = async (): Promise<ConfigEntityApi> => {
  const { data } = await Axios.get<ConfigEntityApi>(`${apiUrl}${configListUrl}`);
  return data;
};

export const getTypeConfigList = async (): Promise<TypeConfigEntityApi[]> => {
  const configList = await getAllConfigurationList();
  return configList.taskListTypes;
};

export const getPriorityConfigList = async (): Promise<PrioConfigEntityApi[]> => {
  const configList = await getAllConfigurationList();
  return configList.taskListPriority;
};
