import { TaskManager } from "../taskManager";
import { loadTasks, saveTasks } from "../storage";
import Task from "../Task";

jest.mock("../storage", () => {
  const originalModule = jest.requireActual("../storage");
  return {
    __esModule: true,
    ...originalModule,
    loadTasks: () => [],
    saveTasks: () => {},
  };
});

describe("task manager", () => {
  test("add task", () => {
    const taskManager = new TaskManager();
    const task = new Task(1, "my task", ["a step here"], 1, ["some note here"]);
    taskManager.addTask(task);
    expect(taskManager.tasks[0]).toBe(task);
  });
});
