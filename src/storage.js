import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const __dirname = new URL('.', import.meta.url).pathname;
const dataPath = path.join(__dirname, 'tasks.json');

function saveTasks(tasks) {
    fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
}

function loadTasks() {
    if (!fs.existsSync(dataPath)) {
        return [];
    }
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data.toString());
}

export { saveTasks, loadTasks };
