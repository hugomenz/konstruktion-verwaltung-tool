export interface ConfigEntityApi {
  taskListTypes: TypeConfigEntityApi[];
  taskListPriority: PrioConfigEntityApi[];
}

export interface PrioConfigEntityApi {
  id: string;
  value: string;
  description: string;
}

export interface TypeConfigEntityApi {
  id: string;
  description: string;
}
