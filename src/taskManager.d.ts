import Task from "./Task";

// TaskManager.d.ts
export class TaskManager {
  tasks: Array<Task>;
  constructor();
  addTask(name: Task): void;
  listTasks(): void;
  addStepToTask(taskIndex: number, stepDescription: string): void;
  completeStep(taskIndex: number, stepIndex: number): void;
  addNoteToTask(taskIndex: number, note: string): void;
}
