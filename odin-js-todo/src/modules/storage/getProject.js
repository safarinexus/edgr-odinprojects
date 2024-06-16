export default function retrieveTasks(projectid) {
    const project = JSON.parse(localStorage.getItem(projectid));
    return project;  
}