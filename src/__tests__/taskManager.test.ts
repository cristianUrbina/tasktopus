import { TaskManager } from "../taskManager";
import Task from "../Task";

jest.mock("../storage", () => {
  return {
    loadTasks: () => [new Task(1, "my task", ["a step here"], 1, ["some note here"])],
    saveTasks: () => { },
  };
});

describe("task manager", () => {
  let taskManager: TaskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("load tasks", () => {
    expect(taskManager.tasks.size).toBe(1);
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
      expect(taskManager.tasks.get(task.id)).toBe(task);
    });

    test("remove task", () => {
      taskManager.removeTaskById(task.id);
      expect(taskManager.tasks.get(task.id)).toBeUndefined();
    });

    describe("update", () => {
      let updatedTask: Task;

      beforeEach(() => {
        updatedTask = new Task(
          task.id,
          "Updated task",
          ["step 1", "step 2"],
          2,
          ["note 1", "note 2"],
        );
      });

      test("update task", () => {
        const result = taskManager.updateTaskById(task.id, updatedTask);
        expect(result).toBe(task);
        expect(taskManager.tasks.get(task.id)).toEqual(updatedTask);
      });

      test("update non existent task", () => {
        const invalidId = 9999;
        updatedTask.id = invalidId;
        expect(() =>
          taskManager.updateTaskById(invalidId, updatedTask),
        ).toThrow("Task id not found");
        expect(taskManager.tasks).not.toContainEqual(updatedTask);
      });
    });
  });
});
