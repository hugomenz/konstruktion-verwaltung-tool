import data from "./data.json";

// from the JSON returns a list with all projects
export const getAllProjectList = () => {
  return data.project_list || [];
};

const allProjects = getAllProjectList();

export const getAllTaskList = () => {
  return allProjects.flatMap((project) => project.task_list);
};

export const getAllAlertList = () => {
  return allProjects.flatMap((project) => project.alert_list);
};

export const getActiveProjects = () => {
  return allProjects.filter((project) => project.isActive);
};

export const onAddProject = () => {};

// Filtered data for specific user
export const getFilteredTaskList = (projectNumberList: number[]) => {
  return getAllTaskList().filter((task) => projectNumberList.includes(task.projectNumber));
};
