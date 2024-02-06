import { TaskManager } from "../taskManager";
import Task from "../Task";

jest.mock("../storage", () => {
  return {
    loadTasks: () => [
      new Task(1, "my task", ["a step here"], 1, ["some note here"]),
    ],
    saveTasks: () => { },
  };
});

describe("task manager", () => {
  test("load tasks", () => {
    const taskManager = new TaskManager();
    expect(taskManager.tasks).toHaveLength(1);
  });

  test("add task", () => {
    const taskManager = new TaskManager();
    const task = new Task(2, "my task 2", ["a step for task 2 here"], 1, [
      "some note here",
    ]);
    taskManager.addTask(task);
    expect(taskManager.tasks[0]).toBe(task);
  });
});
