console.log('initiated');

import './style.css';
import TodayIcon from './icons/today.svg';
import UpcomingIcon from './icons/upcoming.svg';
import newProjIcon from './icons/newproject.svg' 

const TODAY = document.querySelector('#today');
const UPCOMING = document.querySelector('#upcoming');

//adding all images
const Today = new Image(); 
Today.src = TodayIcon; 
TODAY.prepend(Today);

const Upcoming = new Image(); 
Upcoming.src = UpcomingIcon;
UPCOMING.prepend(Upcoming);

const newProj = new Image(); 
newProj.src = newProjIcon;
document.querySelector('#newproj1').prepend(newProj);