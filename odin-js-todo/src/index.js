console.log('initiated');

import './style.css';

//Icon Renders
import mainLogo from './modules/DOM/IconRenders/mainLogo'; 
import todayIcon from './modules/DOM/IconRenders/todayIcon'; 
import upcomingIcon from './modules/DOM/IconRenders/upcomingIcon';
mainLogo();
todayIcon();
upcomingIcon();

//Initial retrive and render Projects
import getProjects from './modules/storage/getProjects';
import renderProjects from './modules/DOM/renderProjects';

/*
localStorage.clear(); 
console.log(localStorage);
*/

let projects = getProjects();
console.log(projects);
renderProjects(projects);
console.log("active: " + projects.filter((proj) => proj.id === localStorage.getItem('active'))[0].name);

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

NEWTASK.addEventListener("click", () => {
    let active = localStorage.getItem("active");
    
});

//crud for project
//crud for todos
//dom functions for project
//dom functions for tasks
//function to sort by today
//function to sort by upcoming

