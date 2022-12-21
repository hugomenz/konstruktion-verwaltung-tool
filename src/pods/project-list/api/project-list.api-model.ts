import { AlertEntityApi } from "../../alert-list/api";
import { TaskEntityApi } from "../../task-list/api";

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
  alert_list: AlertEntityApi[];
  task_list: TaskEntityApi[];
}
