import project from '../classes/project';

export default function storeProject(name, id) {
    const newProject = project(id, name); 
    localStorage.setItem(id, JSON.stringify(newProject));
}