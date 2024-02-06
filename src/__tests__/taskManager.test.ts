import { TaskManager } from "../taskManager";

describe("task manager", () => {
  test("add task", () => {
    const taskManager = new TaskManager();
    // const task = new Task();
    taskManager.addTask("some task");
  });
});
