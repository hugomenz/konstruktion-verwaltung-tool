import { getAllConfigurationList, getAllProjectList } from "./api.main";

const allProjects = getAllProjectList();

export const getAllTaskList = () => {
  return allProjects.flatMap((project) => project.task_list);
};

// Filtered data for specific user
export const getFilteredTaskList = (projectNumberList: number[]) => {
  return getAllTaskList().filter((task) => projectNumberList.includes(task.projectNumber));
};

export const getTypeConfigList = () => {
  return getAllConfigurationList().taskListTypes;
};

export const getPriorityConfigList = () => {
  return getAllConfigurationList().taskListPriority;
};

export const putIsComplete = () => {};
