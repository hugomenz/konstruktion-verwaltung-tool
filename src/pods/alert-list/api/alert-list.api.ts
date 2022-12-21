import { getAllProjectList } from "../../project-list/api/project-list.api";
import { ProjectEntityApi } from "../../project-list/api/project-list.api-model";

let allProjects: ProjectEntityApi[] = [];

getAllProjectList().then((data) => {
  allProjects = data;
});

export const getAllAlertList = () => {
  return allProjects.flatMap((project) => project.alert_list);
};
