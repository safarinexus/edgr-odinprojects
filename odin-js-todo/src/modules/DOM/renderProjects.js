import newProjIcon from '../../icons/newproject.svg';
import getProjects from '../storage/getProjects';
import removeActive from '../storage/removeActive';

export default function renderProjects(arr) { 
    const PROJECTLIST = document.querySelector('#projectlist');
    PROJECTLIST.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const element = document.createElement("div");
        element.classList.add("sidebaritem");
        element.setAttribute('id', arr[i].id);
        element.textContent = arr[i].name;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteproj");

        deleteButton.addEventListener("click", () => {
            removeActive(arr[i].id); 
            localStorage.removeItem(arr[i].id);
            console.log(arr[i].id + " => " + arr[i].name + " removed!");
            renderProjects(getProjects()); 
        })

        element.appendChild(deleteButton);  

        const newProj = new Image(); 
        newProj.src = newProjIcon;
        element.prepend(newProj);

        if (arr[i].id === localStorage.getItem("active")) {
            element.style.backgroundColor = 'rgb(200, 200, 200, 0.4)';
        }

        element.addEventListener("click", (e) => {
            if (!deleteButton.contains(e.target)) {
                localStorage.setItem("active", arr[i].id);
                console.log("active project: " + arr[i].name); 
                renderProjects(getProjects()); 
                //add render for tasks well 
            }
        })

        PROJECTLIST.appendChild(element);
    }
}