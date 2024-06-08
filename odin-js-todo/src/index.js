console.log('initiated');

import { formatDistance, subDays } from "date-fns";

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

import './style.css';
import Logo from "./icons/logo.svg"
import TodayIcon from './icons/today.svg';
import UpcomingIcon from './icons/upcoming.svg';
import newProjIcon from './icons/newproject.svg' 
//todo class
//project class
//crud project 
//crud todos
//dom functions for project
//dom functions for tasks
//function to sort by today
//function to sort by upcoming

const LOGO = document.querySelector('#toplogo');
const TODAY = document.querySelector('#today');
const UPCOMING = document.querySelector('#upcoming');

//adding all images
const TopLogo = new Image(); 
TopLogo.src = Logo;
LOGO.prepend(TopLogo);

const Today = new Image(); 
Today.src = TodayIcon; 
TODAY.prepend(Today);

const Upcoming = new Image(); 
Upcoming.src = UpcomingIcon;
UPCOMING.prepend(Upcoming);

const newProj = new Image(); 
newProj.src = newProjIcon;
document.querySelector('#newproj1').prepend(newProj);