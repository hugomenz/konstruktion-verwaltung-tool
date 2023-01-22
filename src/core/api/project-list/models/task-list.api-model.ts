export interface TaskEntityApi {
  id: string;
  description: string;
  date: string;
  type: string;
  priority: number;
  user: string;
  projectNumber: number;
  isCompleted: boolean;
}
