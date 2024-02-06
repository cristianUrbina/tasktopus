// TaskManager.d.ts
export class TaskManager {
  constructor();
  addTask(name: string): void;
  listTasks(): void;
  addStepToTask(taskIndex: number, stepDescription: string): void;
  completeStep(taskIndex: number, stepIndex: number): void;
  addNoteToTask(taskIndex: number, note: string): void;
}
