import './taskPromptStyle.css';
import storeTask from '../storage/storeTask';
import renderTasks from '../DOM/renderTasks';
import checkActive from '../storage/checkActive';
import { isBefore, format } from 'date-fns';

export default function taskPrompt(projectid) {
    const prompt = () => {
        const element = document.createElement("div");
        element.classList.add("task");
        element.setAttribute('id', 'taskPrompt');
        element.innerHTML = '<button id="addtask"></button>\
                                <input class="prompttext" type="text" id="tasktitleprompt" placeholder="Task Name">\
                                <input class="prompttext" type="text" id="taskdescprompt" placeholder="Task Description">\
                                <div id="duedateprompt">\
                                    <label for="dateprompt">Due: </label>\
                                    <input class="prompttext" type="date" id="dateprompt">\
                                </div>\
                                <div class="taskpriority" id="taskprioprompt">\
                                    <input type="radio" name="prio"  id="high" value="high">\
                                    <label for="high" id="highlabel" class="priobuttons">***</label>\
                                    <input type="radio" name="prio" id="med" value="med">\
                                    <label for="med" id="medlabel" class="priobuttons">**</label>\
                                    <input type="radio" name="prio" id="low" value="low">\
                                    <label for="low" id="lowlabel" class="priobuttons">*</label>\
                                </div>';

        return element;
    }

    const element = prompt();
    const MAIN = document.querySelector('#main'); 
    MAIN.appendChild(element);

    const TITLE = document.querySelector('#tasktitleprompt');
    const DESC = document.querySelector('#taskdescprompt');
    const DATE = document.querySelector('#dateprompt');
    const currentDate = new Date();
    const TODAY = format(currentDate, 'yyyy-MM-dd');

    function exitOnce(event) {
        if (!document.querySelector('#taskPrompt').contains(event.target) && !document.querySelector('#taskadd').contains(event.target)) {
            console.log("exited");
            renderTasks(checkActive());
            document.removeEventListener("click", exitOnce);
        }
    }

    

    document.querySelector('#addtask').addEventListener("click", () => {
        const PRIO = document.querySelector('input[name="prio"]:checked');
        if (TITLE.value === "") {
            alert("Please enter a valid task name!");
        } else if (DATE.value === "") { //format: 2024-07-01
            alert("Please select a due date for your task!");
        } else if (isBefore(DATE.value, TODAY)) {
            alert("Please select a future date!");
        } else if (PRIO === null) {
            alert("Please select a priority for this task!");
        } else if (DESC.value.length > 30) {
            alert("Please shorten your description!");
        } else {
            TITLE.focus();
            document.removeEventListener("click", exitOnce);
            storeTask(projectid, TITLE.value, DESC.value, DATE.value, PRIO.value);
            renderTasks(projectid);
        }
    })

    document.addEventListener("click", exitOnce);
}
