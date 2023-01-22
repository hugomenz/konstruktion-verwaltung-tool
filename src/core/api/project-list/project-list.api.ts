// TODO: Find a solution to store allProjects globally, maybe in a ContextProvider or something like that...

import Axios from "axios";
import { ProjectEntityApi } from "./models/project-list.api-model";

const projectListUrl = "/api/ProjectList";

export const getProjectList = async (): Promise<ProjectEntityApi[]> => {
  console.log(`Fetching data from:  ${projectListUrl}`);
  const { data } = await Axios.get<ProjectEntityApi[]>(`${projectListUrl}`);
  return data;
};
