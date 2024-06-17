console.log('initiated');

const DROPDOWN = document.querySelector('#dropdown');
const DROPDOWNICON = document.querySelector('#dropdownicon');
const MENU = document.querySelector('#menu');

DROPDOWN.addEventListener("mouseover", () => {
    DROPDOWNICON.style.transform = 'rotate(0)'; 
    MENU.style.visibility = 'visible';
    MENU.style.opacity = '100%';
})

DROPDOWN.addEventListener("mouseout", () => {
    DROPDOWNICON.style.transform = 'rotate(-90deg)'; 
    MENU.style.visibility = 'hidden';
    MENU.style.opacity = '0';
})