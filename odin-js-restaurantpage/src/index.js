console.log("started");

import './style.css';
import homeTab from "./home";
import aboutTab from "./about"; 
import menuTab from "./menu";

const HOME = document.querySelector('#home'); 
const ABOUT = document.querySelector('#about');
const MENU = document.querySelector('#menu'); 
const CONTENT = document.querySelector('#content'); 


let homeCheck = true; 
let aboutCheck = false; 
let menuCheck = false;
HOME.style.color = "grey";

homeTab(CONTENT); 

HOME.addEventListener("click", () => {
    if (!homeCheck) {
        //set correct markers
        homeCheck = true; 
        aboutCheck = false; 
        menuCheck = false;
        //update styling for curr tab
        HOME.style.color = "grey";
        ABOUT.style.color = "white"; 
        MENU.style.color = "white";
        CONTENT.innerHTML = "";
        homeTab(CONTENT);
    }
});

ABOUT.addEventListener("click", () => {
    if (!aboutCheck) {
        homeCheck = false; 
        aboutCheck = true; 
        menuCheck = false;
        HOME.style.color = "white";
        ABOUT.style.color = "grey"; 
        MENU.style.color = "white";
        CONTENT.innerHTML = "";
        aboutTab(CONTENT);
    }
});

MENU.addEventListener("click", () => {
    if (!menuCheck) {
        homeCheck = false; 
        aboutCheck = false; 
        menuCheck = true;
        HOME.style.color = "white";
        ABOUT.style.color = "white"; 
        MENU.style.color = "grey";
        CONTENT.innerHTML = "";
        menuTab(CONTENT);
    }
});

