console.log('initiated');

import './style.css';

//Icon Renders
import mainLogo from './modules/DOM/IconRenders/mainLogo'; 
mainLogo();

//Initial retrive and render Projects and Tasks
import getProjects from './modules/storage/getProjects';
import renderProjects from './modules/DOM/renderProjects';
import renderTasks from './modules/DOM/renderTasks';

//localStorage.clear(); 
//console.log(localStorage);

let projects = getProjects();
console.log(projects);
renderProjects(projects);
if (localStorage.getItem('active') !== null) {
    const active = projects.filter((proj) => proj.id === localStorage.getItem('active'))[0]
    console.log("active: " + active.name);
    renderTasks(active.id);
}


//Home Page Buttons
const NEWPROJECT = document.querySelector('#projadd');
const NEWTASK = document.querySelector('#taskadd');

import projectPrompt from './modules/DOM/projectPrompt';

NEWPROJECT.addEventListener("click", () => {
    if (document.querySelector('#projectPrompt') === null) {
        projectPrompt(projects); 
        //need to add edit button for the project name too
    }
});

import checkActive from './modules/storage/checkActive';
import taskPrompt from './modules/DOM/taskPrompt';

NEWTASK.addEventListener("click", () => {
    const active = checkActive();
    if (!active) {
        alert("Please select a project to add task into!");
    } else if (document.querySelector('#taskPrompt') === null) {
        let projectid = null;
        projects = getProjects();
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === active) {
                console.log("task adding into: " + projects[i].name); 
                projectid = projects[i].id;
            }
        }
        taskPrompt(projectid);
    }
});