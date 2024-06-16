import todo from '../classes/todo';

export default function storeTask(projectid, title, description, dueDate, priority) {
    const newTask = todo(title, description, dueDate, priority);
    const project = JSON.parse(localStorage.getItem(projectid));
    project.store.push(newTask);
    localStorage.setItem(projectid, JSON.stringify(project))
}