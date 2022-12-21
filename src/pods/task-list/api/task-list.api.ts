//
// TODO: It is a good idea to add error handling to the code to handle any potential issues that may arise.
// For example, you may want to add a try-catch block to the getActiveProjects function to handle any errors
// that may occur when making the HTTP request or when filtering the projectList data.
//

import { getAllProjectList } from "../../project-list/api/project-list.api";
import { ProjectEntityApi } from "../../project-list/api/project-list.api-model";

let allProjects: ProjectEntityApi[] = [];

getAllProjectList().then((data) => {
  allProjects = data;
});

export const getAllTaskList = () => {
  return allProjects.flatMap((project) => project.task_list);
};

// Filtered data for specific user
export const getFilteredTaskList = (projectNumberList: number[]) => {
  return getAllTaskList().filter((task) => projectNumberList.includes(task.projectNumber));
};
