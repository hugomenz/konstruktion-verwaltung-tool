export interface Project {
  id: string;
  projectNumber: number;
  description: string;
  customer: string;
  estate: string;
  isActive: boolean;
  designer: string;
  alert_list: Alert[];
  task_list: Task[];
}

export interface Alert {
  id: string;
  description: string;
  date: string;
  type: string;
  user: string;
  projectNumber: number;
}
export interface Task {
  id: string;
  description: string;
  date: string;
  type: string;
  priority: number;
  user: string;
  projectNumber: number;
}
