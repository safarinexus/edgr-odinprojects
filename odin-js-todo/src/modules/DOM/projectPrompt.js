import './projectPromptStyle.css';
import { v4 as uuidv4 } from 'uuid';
import storeProject from '../storage/storeProject';
import renderProjects from './renderProjects';
import getProjects from '../storage/getProjects';
import updateActive from '../storage/updateActive';
 
export default function projectPrompt(projects) {
    
    const PROJECTLIST = document.querySelector('#projectlist');

    const prompt = () => {
        const element = document.createElement("div");
        element.classList.add("sidebaritem");
        element.setAttribute('id', 'projectPrompt');
        element.innerHTML = '<input type="text" id="projectPromptText">';
        element.style.backgroundColor = 'rgb(200, 200, 200, 0.4)';

        return element;
    }

    PROJECTLIST.appendChild(prompt());
    document.querySelector('#projectPromptText').focus(); 

    function myClick(event) {
        if (!document.querySelector('#projectPromptText').contains(event.target) && !document.querySelector('#projadd').contains(event.target)) {
            const projName = document.querySelector('#projectPromptText').value;

                for (let i = 0; i < projects.length; i++) {
                    if (projects[i].name === projName) {
                        alert('Project already exists. Please enter another name.');
                        return;
                    }
                }

                if (projName.length === 0) {
                    alert("Please enter a name within 25 letters.");
                } else {
                    const id = uuidv4(); 
                    storeProject(projName, id);
                    updateActive(id); 
                    renderProjects(getProjects());
                    document.removeEventListener('click', myClick);
                    console.log(id + " => " + projName + " added!");
                }
        }
    }
    
    document.addEventListener('click', myClick);
}

