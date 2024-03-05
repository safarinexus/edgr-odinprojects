/*
functionalities to add: 
1. put button functions into functions to add into keypress 
2. complete keyboard functionality
*/ 

//variables to help with calculations
let num1 = null; 
let num2 = null; 
let operator = "";
let result = null;
let inputStore = "";
let outputStore = "";
let decimalFlag = false;

//requirement functions
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 == 0){
        return "ERROR";
    } else {
        return num1 / num2;
    }
}

function operate(operator, num1, num2){
    if (operator == "+"){
        result = add(num1, num2);
    } else if (operator == "-"){
        result = subtract(num1, num2);
    } else if (operator == "×"){
        result = multiply(num1, num2); 
    } else if (operator == "÷"){
        result = divide(num1, num2);
    }
}

//const for use throughout
const BODY = document.body; 
const INPUTTEXT = BODY.querySelector(".inputtext");
const OUTPUTTEXT = BODY.querySelector(".outputtext");
const ALLNUMBUTTONS = BODY.querySelectorAll(".numberbutton"); 
const NUMBUTTONS = [...ALLNUMBUTTONS]; 
const CLEARBUTTON = BODY.querySelector('#clearbutton'); 
const LEFTBRACKET = BODY.querySelector('#leftbracketbutton');
const RIGHTBRACKET = BODY.querySelector('#rightbracketbutton');
const BACKSPACE = BODY.querySelector("#backspacebutton"); 
const PLUS = BODY.querySelector('#plusbutton'); 
const MINUS = BODY.querySelector('#minusbutton');
const MULTIPLY = BODY.querySelector('#multiplybutton'); 
const DIVIDE = BODY.querySelector('#dividebutton'); 
const EQUALS = BODY.querySelector('#equalsbutton');
const DECIMAL = BODY.querySelector('#decimalbutton');

//helper functions
function isValidInput(input) {

}

//number buttons functionality 
NUMBUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        inputStore = inputStore + button.textContent;
        INPUTTEXT.textContent = inputStore.substring(inputStore.length - 24);
    })
})

//parentheses functionality (leave to last)
LEFTBRACKET.addEventListener("click", () => {
    inputStore = inputStore + LEFTBRACKET.textContent;
    INPUTTEXT.textContent = inputStore.substring(inputStore.length - 24);
})
RIGHTBRACKET.addEventListener("click", () => {
    inputStore = inputStore + RIGHTBRACKET.textContent;
    INPUTTEXT.textContent = inputStore.substring(inputStore.length - 24);
})

//decimal functionality
DECIMAL.addEventListener("click", () => {
    if (!decimalFlag){
        inputStore = inputStore + DECIMAL.textContent;
        INPUTTEXT.textContent = inputStore.substring(inputStore.length - 24);
        decimalFlag = true;}
})

//clear button functionality 
CLEARBUTTON.addEventListener("click", () => {
    INPUTTEXT.textContent = "";
    OUTPUTTEXT.textContent = "";
    num1 = null; 
    num2 = null; 
    operator = "";
    result = null;
    inputStore = "";
    outputStore = "";
    decimalFlag = false;
})

//backspace functionality
BACKSPACE.addEventListener("click", () => {
    if (inputStore.slice(-1) == "."){
        decimalFlag = false;
    }
    inputStore = inputStore.substring(0, inputStore.length - 1);
    INPUTTEXT.textContent = inputStore;
})


//plus button functionality 
PLUS.addEventListener("click", () => {
})

//minus button functionality 
MINUS.addEventListener("click", () => {
})

//multiply button functionality
MULTIPLY.addEventListener("click", () => {
})

//divide button functionality
DIVIDE.addEventListener("click", () => {
})

//equals button functionality 
//consider putting the equals function into the operator buttons since it 'equals' if there is a second number
//alternatively, you can consider doing the functionality like a scientific calculator
EQUALS.addEventListener("click", () => {
    
})

//keyboard functionality 
//consider wrapping the functionality in functions so the keypress can just call it
document.addEventListener("keydown", (e) => {
    console.log(e);
})