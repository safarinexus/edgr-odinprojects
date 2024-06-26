console.log('initiated'); 

const MAIN = document.getElementById("main");
const INPUT = document.getElementById("city");
const SEARCHBUTTON = document.getElementById("search");
const CELSIUS = document.getElementById("celsius");
const FARENHEIT = document.getElementById("farenheit");
let current = null; 
let forecast = null; 
let locationInfo = null;
let corfTracker = true;
let resOut = false;

function getKey() {
    return '7af8ef7568a3480cb2f192645242006';
};

const APIKEY = getKey();

function buildQuery(key, location) {
    return 'https://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + location + '&days=3&aqi=no&alerts=no';
}
 
/*=============================DOM FUNCTIONS============================*/
function renderCorf () {
    console.log("renderCorf called.");
    if (corfTracker) {
        CELSIUS.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        FARENHEIT.style.backgroundColor = 'rgb(255, 255, 255, 0.1)';
    } else {
        CELSIUS.style.backgroundColor = 'rgb(255, 255, 255, 0.1)';
        FARENHEIT.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
    }
}

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

function epochToNamedDay(epoch) {
    // Create a new Date object with the epoch time
    const date = new Date(epoch * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  
    // Get the day name using toLocaleDateString with the option { weekday: 'long' }
    const options = { weekday: 'long' };
    const dayName = date.toLocaleDateString('en-US', options);
  
    return dayName;
  }

function displayResult(current, forecast, locationInfo) {
    MAIN.className = 'main-info'
    MAIN.innerHTML = '<div id="location-time-info">\
                        <h1 id="location">' + locationInfo.name + ', ' + locationInfo.country + '</h1>\
                        <span id="time-updated">' + locationInfo.localtime + '</span>\
                    </div>\
                    <div id="current-info">\
                        <div id="current">\
                            <img src="https:' + current.condition.icon + '" alt="curr-weather-icon" id="curr-weather-icon">\
                            <h1 id="curr-temp">' + Math.round(current.temp_c) + '&deg;C</h1>\
                            <br>\
                            <h3 id="condition-text">' + current.condition.text + '</h3>\
                            <br>\
                            <p>Feels like <span id="feels-like">' + Math.round(current.feelslike_c) + '&deg;C</p>\
                            <br>\
                            <p id="high-low">H:' + Math.round(forecast[0].day.maxtemp_c) + '&deg; L:' + Math.round(forecast[0].day.mintemp_c) + '&deg;</p>\
                        </div>\
                        <div class="stat" id="rain">\
                            <span>Rain</span>\
                            <h2>' + forecast[0].day.daily_chance_of_rain + '%</h2>\
                        </div>\
                        <div class="stat" id="humidity">\
                            <span>Humidity</span>\
                            <h2>' + current.humidity + '%</h2>\
                        </div>\
                        <div class="stat" id="precip">\
                            <span>Precipitation</span>\
                            <h2>' + current.precip_mm + 'mm</h2>\
                        </div>\
                        <div class="stat" id="uv">\
                            <span>UV Index</span>\
                            <h2>' + current.uv + '</h2>\
                        </div>\
                        <div class="stat" id="pressure">\
                            <span>Pressure</span>\
                            <h2>' + current.pressure_mb + '</h2>\
                        </div>\
                        <div class="stat" id="cloud">\
                            <span>Cloud Cover</span>\
                            <h2>' + current.cloud + '%</h2>\
                        </div>\
                        <div class="stat" id="visibility">\
                            <span>Visibility</span>\
                            <h2>' + current.vis_km + 'km</h2>\
                        </div>\
                        <div class="stat" id="windspeed">\
                            <span>Wind Speed</span>\
                            <h2>' + current.wind_kph + 'km/h</h2>\
                        </div>\
                        <div class="stat" id="winddir">\
                            <span style="font-size: 0.9em;">Wind Direction</span>\
                            <h2>' + current.wind_dir + '</h2>\
                        </div>\
                    </div>\
                    <div id="weekly-info">\
                        <div id="top-row" class="weekly-item">\
                            <span id="row-item1" class="row-item">Day</span>\
                            <span id="row-item3" class="row-item">Chance of Rain</span>\
                            <span id="row-item4" class="row-item">Humidity</span>\
                            <span id="row-item5" class="row-item">Temperature</span>\
                        </div>\
                        <hr style="width:100%">\
                        <div id="day1" class="weekly-item">\
                            <span id="row-item1" class="row-item">' + epochToNamedDay(forecast[1].date_epoch) + '</span>\
                            <span id="row-item2" class="row-item"><img src="https:' + forecast[1].day.condition.icon + '" alt="curr-weather-icon" id="curr-weather-icon"></span>\
                            <span id="row-item3" class="row-item">' + forecast[1].day.daily_chance_of_rain +  '%</span>\
                            <span id="row-item4" class="row-item">' + forecast[1].day.avghumidity + '%</span>\
                            <span id="forecast-high-low1" class="row-item">H:' + Math.round(forecast[1].day.maxtemp_c) + '&deg; L:' + Math.round(forecast[1].day.mintemp_c) + '&deg;</span>\
                        </div>\
                        <hr style="width:100%">\
                        <div id="day1" class="weekly-item">\
                            <span id="row-item1" class="row-item">' + epochToNamedDay(forecast[2].date_epoch) + '</span>\
                            <span id="row-item2" class="row-item"><img src="https:' + forecast[2].day.condition.icon + '" alt="curr-weather-icon" id="curr-weather-icon"></span>\
                            <span id="row-item3" class="row-item">' + forecast[2].day.daily_chance_of_rain +  '%</span>\
                            <span id="row-item4" class="row-item">' + forecast[2].day.avghumidity + '%</span>\
                            <span id="forecast-high-low2" class="row-item">H:' +  Math.round(forecast[2].day.maxtemp_c) + '&deg; L:' +  Math.round(forecast[2].day.mintemp_c) + '&deg;</span>\
                        </div>\
                    </div>';
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
        displayResult(current, forecast, locationInfo);
        resOut = true;
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

function getFarenheit () {
    if (corfTracker && resOut) {
        document.getElementById("curr-temp").innerHTML = Math.round(current.temp_f) + '&deg;F';
        document.getElementById("feels-like").innerHTML = Math.round(current.feelslike_f) + '&deg;F';
        document.getElementById("high-low").innerHTML = 'H:' + Math.round(forecast[0].day.maxtemp_f) + '&deg; L:' + Math.round(forecast[0].day.mintemp_f) + '&deg;';
        document.getElementById("forecast-high-low1").innerHTML = 'H:' + Math.round(forecast[1].day.maxtemp_f) + '&deg; L:' + Math.round(forecast[1].day.mintemp_f) + '&deg;';
        document.getElementById("forecast-high-low2").innerHTML = 'H:' + Math.round(forecast[2].day.maxtemp_f) + '&deg; L:' + Math.round(forecast[2].day.mintemp_f) + '&deg;';
        corfTracker = false;
        renderCorf();
    }
}

function getCelsius () {
    if (!corfTracker && resOut) {
        document.getElementById("curr-temp").innerHTML = Math.round(current.temp_c) + '&deg;C';
        document.getElementById("feels-like").innerHTML = Math.round(current.feelslike_c) + '&deg;C';
        document.getElementById("high-low").innerHTML = 'H:' + Math.round(forecast[0].day.maxtemp_c) + '&deg; L:' + Math.round(forecast[0].day.mintemp_c) + '&deg;';
        document.getElementById("forecast-high-low1").innerHTML = 'H:' + Math.round(forecast[1].day.maxtemp_c) + '&deg; L:' + Math.round(forecast[1].day.mintemp_c) + '&deg;';
        document.getElementById("forecast-high-low2").innerHTML = 'H:' + Math.round(forecast[2].day.maxtemp_c) + '&deg; L:' + Math.round(forecast[2].day.mintemp_c) + '&deg;';
        corfTracker = true;
        renderCorf();
    }
}

INPUT.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        getQuery();
    }
})

SEARCHBUTTON.addEventListener("click", getQuery);
CELSIUS.addEventListener("click", getCelsius);
FARENHEIT.addEventListener("click",getFarenheit);

renderCorf();

/*========================EXTRAS=======================*/

const SNOWMAN = document.getElementById('snowman'); 
let counter = 0;
SNOWMAN.addEventListener('mouseenter', () => {
    counter += 180;
    SNOWMAN.style.transform = 'rotateY(' + counter + 'deg)';
})