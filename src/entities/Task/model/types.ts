export interface Task {
  id: string;
  value: string;
  completed: boolean;
}

export enum TaskType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}
