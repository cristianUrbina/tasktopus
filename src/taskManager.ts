import Task from "./Task.js";
import { saveTasks, loadTasks } from "./storage.js";

export class TaskManager {
    tasks: Array<Task>;
    constructor() {
        this.tasks = loadTasks();
    }

    addTask(task: Task) {
        this.tasks.push(task);
        saveTasks(this.tasks);
    }

    // removeTaskById(id: number) {
    //     // this.tasks = this.tasks.filter((t) => t.id !== id);
    // }

    // listTasks() {
    //     this.tasks.forEach((task, index) => {
    //         console.log(
    //             `${index + 1}. ${task.name} - Steps Completed: ${task.currentStep}/${task.steps.length}`,
    //         );
    //         // Optional: Add more details or formatting as desired
    //     });
    // }
    //
    // addStepToTask(taskIndex, stepDescription) {
    //     if (taskIndex >= 0 && taskIndex < this.tasks.length) {
    //         this.tasks[taskIndex].steps.push({
    //             description: stepDescription,
    //             completed: false,
    //         });
    //         saveTasks(this.tasks);
    //     } else {
    //         console.log("Invalid task index.");
    //     }
    // }
    //
    // completeStep(taskIndex, stepIndex) {
    //     const task = this.tasks[taskIndex];
    //     if (task && task.steps[stepIndex]) {
    //         task.steps[stepIndex].completed = true;
    //         saveTasks(this.tasks);
    //         console.log("Step completed successfully!");
    //     } else {
    //         console.log("Invalid task or step index.");
    //     }
    // }
    //
    // addNoteToTask(taskIndex, note) {
    //     const task = this.tasks[taskIndex];
    //     if (task) {
    //         task.notes.push(note);
    //         saveTasks(this.tasks);
    //         console.log("Note added successfully!");
    //     } else {
    //         console.log("Invalid task index.");
    //     }
    // }
}
