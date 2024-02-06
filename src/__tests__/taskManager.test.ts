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
  let taskManager: TaskManager;
  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("load tasks", () => {
    expect(taskManager.tasks).toHaveLength(1);
  });

  describe("tasks alterations", () => {
    let task: Task;
    beforeEach(() => {
      task = new Task(2, "my task 2", ["a step for task 2 here"], 1, [
        "some note here",
      ]);
      taskManager.addTask(task);
    });

    test("add task", () => {
      expect(taskManager.tasks).toContain(task);
    });

    test("remove task", () => {
      taskManager.removeTaskById(task.id);
      expect(taskManager.tasks).not.toContain(task);
    });
  });

  describe("update task", () => {

  });
});
