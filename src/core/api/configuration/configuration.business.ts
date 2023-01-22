import { ConfigEntityApi, PrioConfigEntityApi, TypeConfigEntityApi } from "./models/configuration.model";

export const getTypeConfigList = async (config: ConfigEntityApi): Promise<TypeConfigEntityApi[]> => {
  return config.taskListTypes;
};
export const getPriorityConfigList = async (config: ConfigEntityApi): Promise<PrioConfigEntityApi[]> => {
  return config.taskListPriority;
};
