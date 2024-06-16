import retrieveTasks from '../storage/retrieveTasks';
import priority from './priority';

export default function renderTasks(projectid) {
    const store = retrieveTasks(projectid); 
    const MAIN = document.querySelector('#main');
    MAIN.innerHTML = "";

    for (let i = 0; i < store.length; i++) {
        const task = store[i];

        const element = document.createElement("div");
        element.classList.add("task");
        element.setAttribute('id', "task" + i);
        element.innerHTML = '<button class="taskcheck"></button>\
                            <div class="tasktitle"><h5>' + task.title + '</h5></div>\
                            <div class="taskdesc">' + task.description + '</div>\
                            <div class="taskduedate">Due:' + task.dueDate + '</div>\
                            <div class="taskpriority">\
                                <button id="high' + i + '" class="prio">***</button>\
                                <button id="med' + i + '" class="prio">**</button>\
                                <button id="low' + i + '" class="prio">*</button>\
                            </div>'; 

                           
        priority(task, i, projectid);

        element.appendChild 
    
        MAIN.appendChild(element);
    }
}