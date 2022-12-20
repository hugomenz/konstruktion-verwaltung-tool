import data from "./data.json";

export const getAllProjectList = () => {
  return data.project_list || [];
};

export const getAllConfigurationList = () => {
  return data.configuration || [];
};
