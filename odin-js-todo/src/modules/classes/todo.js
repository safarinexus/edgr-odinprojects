export default function todo(id, project, title, created, description, dueDate, priority, done=false) {
    if (title !== '') {
        const taskDone = () => {
            if (!done) { 
                done = true; 
            } else {
                done = false;
            }
            console.log(done);
        }

        return {
            id, 
            project,
            title, 
            created,
            description, 
            dueDate, 
            priority, 
            done, 
            taskDone
        }
    }
}