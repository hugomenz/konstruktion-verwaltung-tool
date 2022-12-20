import { getAllProjectList } from "./api.main";

const allProjects = getAllProjectList();

export const getAllAlertList = () => {
  return allProjects.flatMap((project) => project.alert_list);
};

export const getActiveProjects = () => {
  return allProjects.filter((project) => project.isActive);
};

export const onAddProject = () => {};
