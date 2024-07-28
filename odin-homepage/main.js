console.log('initiated');

function addProject(name, description, github, link) {
    const newName = (function replaceWhitespaceWithDash(str) {
        return str.replace(/\s+/g, '-');
    })(name);

    const CONTAINER = document.querySelector('.projects-container');
    const PROJCARD = document.createElement('div'); 
    PROJCARD.classList.add('project-card'); 
    PROJCARD.innerHTML = '<div class="project-ss" id="' + newName + '"></div>\
                        <div class="project-bottomhalf">\
                    <div class="project-name">' + name + '</div>\
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

    PROJCARD.querySelector('#' + newName).style.backgroundImage = 'url(./assets/' + newName + '.png)';

    CONTAINER.appendChild(PROJCARD);
}

//battleship project
addProject("Battleship", "The final project for the JavaScript Section of TOP, the game of Battleship.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-battleship", "https://safarinexus.github.io/odin_projects/odin-js-battleship/dist/index.html"); 

//weather app project
addProject("Weather App", "A functioning weather app, built using WeatherAPI's free API, as well as JavaScript Promises.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-weatherapp", "https://safarinexus.github.io/odin_projects/odin-js-weatherapp/index.html"); 

//todo project
addProject("Todo List", "My version of a Todo List Web App using Vanilla HTML, CSS & JavaScript", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-todo", "https://safarinexus.github.io/odin_projects/odin-js-todo/dist/index.html"); 

//restaurant page project
addProject("Restaurant Page", 'A simple "tabbed" restaurant homepage using Webpack bundler.', "https://github.com/safarinexus/odin_projects/tree/main/odin-js-restaurantpage", "https://safarinexus.github.io/odin_projects/odin-js-restaurantpage/dist/index.html"); 

//tictactoe project 
addProject("Tic-Tac-Toe", "A simple game of Tic-Tac-Toe played from your browser! Made Using JS IIFEs and Factory Functions.", "https://github.com/safarinexus/odin_projects/tree/main/odin-js-tictactoe", "https://safarinexus.github.io/odin_projects/odin-js-tictactoe/jstictactoe.html");

//calculator project
addProject("Calculator", "An on-screen calculator in your browser!", "https://github.com/safarinexus/odin_projects/tree/main/odin-calculator", "https://safarinexus.github.io/odin_projects/odin-calculator/calculator.html"); 

//landing page project
addProject("Landing Page", "A simple landing page.", "https://github.com/safarinexus/odin_projects/tree/main/odin-landing-page", "https://safarinexus.github.io/odin_projects/odin-landing-page/landing-page.html"); 