// TODO: Find a solution to store allProjects globally, maybe in a ContextProvider or something like that...

import Axios from "axios";
import { ProjectEntityApi } from "./project-list.api-model";

const apiUrl = "http://localhost:3000";
const projectListUrl = "/project_list";

export const getAllProjectList = async (): Promise<ProjectEntityApi[]> => {
  const { data } = await Axios.get<ProjectEntityApi[]>(`${apiUrl}${projectListUrl}`);
  return data;
};

export const filterActiveProjects = (projectList: ProjectEntityApi[]) => {
  return projectList.filter((project) => project.isActive);
};

export const getActiveProjects = async (): Promise<ProjectEntityApi[]> => {
  const projectList = await getAllProjectList();
  const activeProjects = filterActiveProjects(projectList);
  return activeProjects;
};
