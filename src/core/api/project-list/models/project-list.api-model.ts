import { AlertEntityApi } from "./alert-list.api-model";
import { TaskEntityApi } from "./task-list.api-model";

export interface GetResponse {
  results: ProjectEntityApi[];
}

export interface ProjectEntityApi {
  id: string;
  projectNumber: number;
  description: string;
  customer: string;
  estate: string;
  isActive: boolean;
  designer: string;
  alertList: AlertEntityApi[];
  taskList: TaskEntityApi[];
}
