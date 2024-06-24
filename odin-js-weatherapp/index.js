console.log('initiated'); 

const MAIN = document.getElementById("main");
const INPUT = document.getElementById("city");
const SEARCHBUTTON = document.getElementById("search");
let current = null; 
let forecast = null; 
let locationInfo = null;

function getKey() {
    return '7af8ef7568a3480cb2f192645242006';
};

const APIKEY = getKey();

function buildQuery(key, location) {
    return 'http://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + location + '&days=3&aqi=no&alerts=no';
}
 
/*=============================DOM FUNCTIONS============================*/

function displayLoading() {
    MAIN.innerHTML = ''; 
    MAIN.className = 'main-loading'
    const loading = document.createElement('div'); 
    loading.id = 'loading';
    loading.innerHTML = '<div id="loader"></div>\
                        <h2 id="loadingtext">Give me a sec...</h2>'
    MAIN.appendChild(loading);
}

function displayError(message) {
    MAIN.innerHTML = ''; 
    MAIN.className = 'main-error'
    MAIN.innerHTML = '<h1>ERROR!</h1>\
                    <img src="./assets/error.svg" alt="error">'
    MAIN.innerHTML += '<h2>' + message + '</h2>';
}

/*=====================ASYNC/DATA HANDLING FUNCTIONS=====================*/

async function handleErrorResponse(response) {
    console.log('handleError called.');
    try {   
        const error = await response.json();
        console.log(error.error);
        displayError(error.error.message);
    } catch (err) {
        console.log(err)
    }
}

async function getData(data) {
    try {
        const response = await data.json(); 
        current = response.current; 
        forecast = response.forecast.forecastday; 
        locationInfo = response.location;
        console.log(current); 
        console.log(forecast); 
        console.log(locationInfo);
        test();
    } catch (err) {
        console.log(err);
        displayError(err.message);
    }
}

async function getResponse(query) {
    try {
        const response = await fetch(query, { mode : 'cors' });
        if (response.ok) {
            console.log('response: ' + response.ok);
            getData(response);
        } else {
            handleErrorResponse(response);
        }
    } catch (err) {
        displayError(err.message);
        console.log(err.message); 
        
    }
}

/*========================HEADER BUTTON FUNCTIONS=======================*/

function getQuery() {
    current = null; 
    forecast = null;
    locationInfo = null; 
    if (INPUT.value === '' || INPUT.value === undefined) {
        INPUT.setCustomValidity('Please enter a city in the form of: "City" or "City, Country" or "Country".');
        INPUT.reportValidity();
    } else {
        const query = buildQuery(APIKEY, INPUT.value);    
        displayLoading();
        console.log(query);
        getResponse(query);
    }
} 

INPUT.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        getQuery();
    }
})
SEARCHBUTTON.addEventListener("click", getQuery);


//current, forecast(arr) & locationInfo
function test() {
    MAIN.innerHTML = '<img alt="current weather" src="https:' + current.condition.icon + '">';
}

/*========================EXTRAS=======================*/

const SNOWMAN = document.getElementById('snowman'); 
let counter = 0;
SNOWMAN.addEventListener('mouseenter', () => {
    counter += 180;
    SNOWMAN.style.transform = 'rotateY(' + counter + 'deg)';
})