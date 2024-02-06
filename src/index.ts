import inquirer from "inquirer";
import { TaskManager } from "./taskManager.js";
import chalk from "chalk";

const taskManager = new TaskManager();

function addTask() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "taskName",
                message: "Enter the task name:",
            },
        ])
        .then((answer: any) => {
            taskManager.addTask(answer.taskName);
            console.log(chalk.green("Task added successfully!"));
            mainMenu(); // Return to the main menu
        });
}

function listTasks() {
    console.log(chalk.yellow("Current Tasks:"));
    taskManager.listTasks();
    mainMenu(); // Return to the main menu
}

async function completeStep() {
    const { taskIndex } = await inquirer.prompt([
        {
            type: "input",
            name: "taskIndex",
            message: "Enter the task index:",
            // You might want to validate the input to ensure it's a number
        },
    ]);

    const { stepIndex } = await inquirer.prompt([
        {
            type: "input",
            name: "stepIndex",
            message: "Enter the step index:",
            // Again, validation could be helpful here
        },
    ]);

    taskManager.completeStep(taskIndex - 1, stepIndex - 1); // Adjusting for zero-based index
    mainMenu();
}

async function addNote() {
    const { taskIndex } = await inquirer.prompt([
        {
            type: "input",
            name: "taskIndex",
            message: "Enter the task index:",
        },
    ]);

    const { note } = await inquirer.prompt([
        {
            type: "input",
            name: "note",
            message: "Enter your note:",
        },
    ]);

    taskManager.addNoteToTask(taskIndex - 1, note);
    mainMenu();
}

// Update the mainMenu function to include the new options:
function mainMenu() {
    console.log(chalk.blue("Task Manager"));
    inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    "Add Task",
                    "List Tasks",
                    "Complete Step",
                    "Add Note",
                    "Exit",
                ],
            },
        ])
        .then((answers: any) => {
            switch (answers.action) {
                case "Add Task":
                    addTask();
                    break;
                case "List Tasks":
                    listTasks();
                    break;
                case "Complete Step":
                    completeStep();
                    break;
                case "Add Note":
                    addNote();
                    break;
                case "Exit":
                    console.log(chalk.green("Goodbye!"));
                    process.exit();
            }
        });
}

mainMenu();
