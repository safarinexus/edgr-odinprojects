import getProject from '../storage/getProject';
import update from '../storage/update';

export default function renderTasks(projectid) {
    const project = getProject(projectid); 
    const store = project.store; 
    const MAIN = document.querySelector('#main');
    MAIN.innerHTML = "";

    for (let i = 0; i < store.length; i++) {
        const task = store[i];

        const element = document.createElement("div");
        element.classList.add("task");
        element.setAttribute('id', "task" + i);
        element.innerHTML = '<button id="taskcheck' + i + '" class="taskcheck"></button>\
                            <div class="tasktitle"><h5>' + task.title + '</h5></div>\
                            <div class="taskdesc">' + task.description + '</div>\
                            <div class="taskduedate">Due: ' + task.dueDate + '</div>\
                            <div class="taskpriority">\
                                <button id="high' + i + '" class="prio">***</button>\
                                <button id="med' + i + '" class="prio">**</button>\
                                <button id="low' + i + '" class="prio">*</button>\
                            </div>'; 
                           
        setTimeout(() => {
            const done = document.querySelector('#taskcheck' + i);
            const whole = document.querySelector('#task' + i);
            const high = document.querySelector('#high' + i);
            const med = document.querySelector('#med' + i);
            const low = document.querySelector('#low' + i);

            done.addEventListener("click", () => {
                if (!task.done) { 
                    task.done = true;
                    update(project);
                    whole.style.opacity = '30%';
                    done.style.backgroundColor = 'darkblue'; 
                    done.style.border = '1.5px solid white';
                    const deleteTask = document.createElement("button");
                    deleteTask.setAttribute("class", "deletetask");
                    whole.appendChild(deleteTask);
                    deleteTask.addEventListener("click", () => {
                        console.log('deleting ' + task.title);
                        project.store = store.filter((tasks) => {
                            return tasks !== task;
                        });
                        update(project);
                        MAIN.removeChild(element); 
                    })
                }
            })

            if (task.done) { 
                whole.style.opacity = '30%';
                done.style.backgroundColor = 'darkblue'; 
                done.style.border = '1.5px solid white';
                const deleteTask = document.createElement("button");
                deleteTask.setAttribute("class", "deletetask");
                whole.appendChild(deleteTask);
                deleteTask.addEventListener("click", () => {
                    console.log('deleting ' + task.title);
                    project.store = store.filter((tasks) => {
                        return tasks !== task;
                    });
                    update(project);
                    MAIN.removeChild(element);
                })

            } else {
                high.addEventListener("click", () => {
                    if (task.priority !== "high") {
                        task.priority = 'high';
                        update(project);
                        high.style.backgroundColor = 'red'; 
                        high.style.color = 'white';
                        med.style.backgroundColor = 'transparent'; 
                        med.style.color = 'orange';
                        low.style.backgroundColor = 'transparent'; 
                        low.style.color = 'green';
                    }
                })
    
                med.addEventListener("click", () => {
                    if (task.priority !== "med") {
                        task.priority = 'med';
                        update(project);
                        high.style.backgroundColor = 'transparent'; 
                        high.style.color = 'red';
                        med.style.backgroundColor = 'orange'; 
                        med.style.color = 'white';
                        low.style.backgroundColor = 'transparent'; 
                        low.style.color = 'green';
                    }
                })
    
                low.addEventListener("click", () => {
                    if (task.priority !== "low") {
                        task.priority = 'low';
                        update(project);
                        high.style.backgroundColor = 'transparent'; 
                        high.style.color = 'red';
                        med.style.backgroundColor = 'transparent'; 
                        med.style.color = 'orange';
                        low.style.backgroundColor = 'green'; 
                        low.style.color = 'white';
                    }
                })
            }

            if (task.priority === 'high') {
                high.style.backgroundColor = 'red'; 
                high.style.color = 'white';
            } else if (task.priority === 'med') {
                med.style.backgroundColor = 'orange'; 
                med.style.color = 'white';
            } else {
                low.style.backgroundColor = 'green'; 
                low.style.color = 'white';
            }
        }, 10);

        element.appendChild 
    
        MAIN.appendChild(element);
    }
}