import { ProjectEntityApi } from "./models/project-list.api-model";

export const filterActiveProjects = (projectList: ProjectEntityApi[]) => {
  return projectList.filter((project) => project.isActive);
};

export const getAllTaskList = (projectList: ProjectEntityApi[]) => {
  return projectList.flatMap((project) => project.taskList);
};

// Filtered data for specific user.
// It will receive an array with project numbers
export const getFilteredTaskList = (projectList: ProjectEntityApi[], projectNumberList: number[]) => {
  console.log(getAllTaskList(projectList));
  return getAllTaskList(projectList).filter((task) => projectNumberList.includes(task.projectNumber));
};

export const getAllAlertList = (projectList: ProjectEntityApi[]) => {
  return projectList.flatMap((project) => project.alertList);
};
