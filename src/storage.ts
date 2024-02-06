import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const dirname = new URL('.', import.meta.url).pathname;
const dataPath = path.join(dirname, 'tasks.json');

function saveTasks(tasks: any) {
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
