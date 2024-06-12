export default function project(id, name) {
    const store = new Map(); 

    const addTask = (task) => {
        store.set(task.id, task);
    }

    const removeTask = (task) => {
        store.delete(task.id);
    } 
    
    return {
        id, 
        name,
        store,
        addTask, 
        removeTask
    }
}