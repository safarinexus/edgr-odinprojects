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

const NEXT = document.querySelector('#next');
const PREV = document.querySelector("#prev");
const PIC1 = document.querySelector('#pic1');
const PIC2 = document.querySelector('#pic2');
const PIC3 = document.querySelector('#pic3');
const PIC4 = document.querySelector('#pic4');
const PIC5 = document.querySelector('#pic5');
const PICS = document.querySelector('#pictures');
let position = 0;
PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.7)'; 

function firstButton() { 
    if (position !== 0) {
        position = 0;
        PICS.style.left = position + 'px';
        PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
        PIC2.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC3.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC4.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC5.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';

    }
}
function secondButton() {
    if (position !== -500) {
        position = -500;
        PICS.style.left = position + 'px';
        PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC2.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
        PIC3.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC4.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC5.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
    }
}

function thirdButton() {
    if (position !== -1000) {
        position = -1000;
        PICS.style.left = position + 'px';
        PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC2.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC3.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
        PIC4.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC5.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
    }
}

function fourthButton() {
    if (position !== -1500) {
        position = -1500;
        PICS.style.left = position + 'px';
        PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC2.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC3.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC4.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
        PIC5.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
    }
}

function fifthButton() {
    if (position !== -2000) {
        position = -2000;
        PICS.style.left = position + 'px';
        PIC1.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC2.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC3.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC4.style.backgroundColor = 'rgb(255, 255, 255, 0.2)';
        PIC5.style.backgroundColor = 'rgb(255, 255, 255, 0.7)';
    }
}


NEXT.addEventListener("click", () => {
    if (position !== -2000) {
        if (position === 0) {
            secondButton();
        } else if (position === -500) {
            thirdButton();
        } else if (position === -1000) {
            fourthButton(); 
        } else if (position === -1500) {
            fifthButton(); 
        }
    }
})

PREV.addEventListener("click", () => {
    if (position !== 0) {
        if (position === -2000) {
            fourthButton();
        } else if (position === -1500) {
            thirdButton();
        } else if (position === -1000) {
            secondButton(); 
        } else if (position === -500) {
            firstButton();
        }
    }
})  

PIC1.addEventListener("click", firstButton)
PIC2.addEventListener("click", secondButton)
PIC3.addEventListener("click", thirdButton)
PIC4.addEventListener("click", fourthButton)
PIC5.addEventListener("click", fifthButton)


let arr = [firstButton, secondButton, thirdButton, fourthButton, fifthButton] 
let counter = 1; 
setInterval(() => {
    console.log(arr[counter].name + ' called.');
    arr[counter]();
    if (counter === 4) {
        counter = 0;
    } else {
        counter += 1;
    }
}, 5000)

