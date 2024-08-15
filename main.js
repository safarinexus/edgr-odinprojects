console.log('initiated');

function addProject(name, description, github, link, image=true, wip=false) {
    const newName = (function replaceWhitespaceWithDash(str) {
        return str.replace(/\s+/g, '-');
    })(name);

    const CONTAINER = document.querySelector('.projects-container');
    const PROJCARD = document.createElement('div'); 
    PROJCARD.id = newName;
    PROJCARD.classList.add('project-card'); 
    PROJCARD.innerHTML = '<div class="project-ss" id="' + newName + '-ss"></div>\
                        <div class="project-bottomhalf">\
                    <div class="project-name" id="' + newName + '">' + name + '</div>\
                    <div class="project-links">\
                        <a href="' + github +  '" target="_blank">\
                            <img class="projlogo" src="./assets/github.svg" alt="github logo">\
                        </a>\
                        <a href="' + link + '" target="_blank">\
                            <img class="projlogo" src="./assets/open-in-new.svg" alt="open in new icon">\
                        </a>\
                    </div>\
                    <div class="project-description">' + description + '</div>\
                </div>';

    if (image) {
        PROJCARD.querySelector('#' + newName + '-ss').style.backgroundImage = 'url(./assets/' + newName + '.png)';
    } else {
        PROJCARD.querySelector('#' + newName + '-ss').innerHTML = "Placeholder for Screenshot of Project";
        PROJCARD.querySelector('#' + newName + '-ss').className = "project-ss-placeholder";
    }
    
    if (wip) { 
        PROJCARD.querySelector('#' + newName ).innerHTML += '<br><span>(Work in Progress)</span>'; 
        PROJCARD.querySelector('#' + newName ).className = 'project-name-wip';
    } 

    CONTAINER.appendChild(PROJCARD);
}
//react shopping page project 
addProject("React Shopping Site", "A frontend UI for a shopping page, built with React.", "https://github.com/safarinexus/odin_projects/tree/main/odin-react-shoppingcart", "https://odin-shopping-page.vercel.app/");


//react memory card project 
addProject("React Memory Card", "The game of memory cards, made with React, right in the browser. ", "https://github.com/safarinexus/odin_projects/tree/main/odin-react-memorycard", "https://odin-projects-nine.vercel.app/");

//react cv maker application project 
addProject("React CV Maker", "My first ever React project, an application that helps build a CV/Resume", "https://github.com/safarinexus/odin_projects/tree/main/odin-react-cvmakerapplication", "https://odin-projects-psi.vercel.app/"); 

//homepage project
addProject("Homepage", "A CV homepage meant to practice advanced HTML & CSS skills.", "https://github.com/safarinexus/odin_projects/tree/main/odin-homepage", "./odin-homepage/index.html");

//battleship project
addProject("Battleship", "The final project for the JavaScript Section of TOP, the game of Battleship.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-battleship", "./odin-js-battleship/dist/index.html"); 

//weather app project
addProject("Weather App", "A functioning weather app, built using WeatherAPI's free API, as well as JavaScript Promises.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-weatherapp", "./odin-js-weatherapp/index.html"); 

//todo project
addProject("Todo List", "My version of a Todo List Web App using Vanilla HTML, CSS & JavaScript", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-todo", "./odin-js-todo/dist/index.html"); 

//restaurant page project
addProject("Restaurant Page", 'A simple "tabbed" restaurant homepage using Webpack bundler.', "https://github.com/safarinexus/odin_projects/tree/main/odin-js-restaurantpage", "./odin-js-restaurantpage/dist/index.html"); 

//tictactoe project 
addProject("Tic-Tac-Toe", "A simple game of Tic-Tac-Toe played from your browser! Made Using JS IIFEs and Factory Functions.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-tictactoe", "./odin-js-tictactoe/jstictactoe.html");

//library app project
addProject("Library App", "A library website of books with basic functionality to add new books implemented with Dialogs and JS Objects", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-library", "./odin-js-library/jslibrary.html");

//dashboard project 
addProject("Dashboard Template", "A simple dashboard website template built with CSS Grid.", "https://github.com/safarinexus/odin_projects/tree/main/odin-dashboard", "./odin-dashboard/dashboard.html");

//signup project
addProject("Signup Page Template", "A simple mockup template of a signup page.", "https://github.com/safarinexus/odin_projects/tree/main/odin-signup", "./odin-signup/signup.html")

//calculator project
addProject("Calculator", "An on-screen calculator in your browser!", "https://github.com/safarinexus/odin_projects/tree/main/odin-calculator", "./odin-calculator/calculator.html"); 

//etch-a-sketch project
addProject("Etch-A-Sketch", 'A very cool "Etch-a-Sketch" toy built right into your browser using basic JavaScript that you can play with using your mouse! Give it a try.', "https://github.com/safarinexus/odin_projects/tree/main/odin-etch-a-sketch", "./odin-etch-a-sketch/etch-a-sketch.html");

//rock-paper-scissors project 
addProject("Rock-Paper-Scissors", 'A game of Rock, Paper and Scissors that can be played on your browser!', "https://github.com/safarinexus/odin_projects/tree/main/odin-rockpaperscissors", "./odin-rockpaperscissors/rockpaperscissors.html");

//landing page project
addProject("Landing Page", "A simple landing page.", "https://github.com/safarinexus/odin_projects/tree/main/odin-landing-page", "./odin-landing-page/landing-page.html"); 

//recipes project
addProject("Recipes Page", "The most basic HTML webpage with some links to my favourite recipes.", "https://github.com/safarinexus/odin_projects/tree/main/odin-recipes", "./odin-recipes/recipes.html");

//extra project: Form Validation 
addProject("Form Validation", "The assignment for the 'Form Validation with JavaScript' lesson, a form with JS validation. (No data collected)", "https://github.com/safarinexus/odin_projects/tree/main/extras/form-validation", "./extras/form-validation/index.html");

//extra project: 
addProject("Image Carousel and Drop-down Menu", "The assignment for the 'Dynamic User Interface Interactions' lesson, a dynamic drop-down menu and image carousel.", "https://github.com/safarinexus/odin_projects/tree/main/extras/dynamic-user-interfaces", "./extras/dynamic-user-interfaces/index.html");