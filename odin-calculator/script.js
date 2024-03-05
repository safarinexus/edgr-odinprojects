/*
functionalities to add: 
1. pemdas support!
*/ 

//requirement variables
let num1 = null; 
let num2 = null; 
let operator = "";
let result = null;

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

//helper variables
let inputBuffer = "";
let decimalFlag = false;

//helper functions
function isNumber(char) {
    const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 
    return NUMBERS.includes(char);
}

//number buttons functionality 
NUMBUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        inputBuffer = inputBuffer + button.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    })
})

//parentheses functionality (leave to last)
LEFTBRACKET.addEventListener("click", () => {
    inputBuffer = inputBuffer + LEFTBRACKET.textContent;
    INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
})
RIGHTBRACKET.addEventListener("click", () => {
    inputBuffer = inputBuffer + RIGHTBRACKET.textContent;
    INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
})

//decimal functionality
DECIMAL.addEventListener("click", () => {
    if (!decimalFlag){
        inputBuffer = inputBuffer + DECIMAL.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
        decimalFlag = true;
    }
})

//clear button functionality 
CLEARBUTTON.addEventListener("click", () => {
    INPUTTEXT.textContent = "";
    OUTPUTTEXT.textContent = "";
    num1 = null; 
    num2 = null; 
    operator = "";
    result = null;
    inputBuffer = "";
    decimalFlag = false;
})

//backspace functionality
BACKSPACE.addEventListener("click", () => {
    if (inputBuffer.slice(-1) == "."){
        decimalFlag = false;
    }
    inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1);
    INPUTTEXT.textContent = inputBuffer;
})

//plus button functionality 
PLUS.addEventListener("click", () => {
    if (isNumber(inputBuffer.slice(-1))){
        decimalFlag = false;
        inputBuffer = inputBuffer + PLUS.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "÷"){
        decimalFlag = false; 
        inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + PLUS.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    }
})

//minus button functionality 
MINUS.addEventListener("click", () => {
    if (isNumber(inputBuffer.slice(-1))){
        decimalFlag = false;
        inputBuffer = inputBuffer + MINUS.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "+" || inputBuffer.slice(-1) == "÷"){
        decimalFlag = false; 
        inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + MINUS.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    }
})

//multiply button functionality
MULTIPLY.addEventListener("click", () => {
    if (isNumber(inputBuffer.slice(-1))){
        decimalFlag = false;
        inputBuffer = inputBuffer + MULTIPLY.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    } else if (inputBuffer.slice(-1) == "+" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "÷"){
        decimalFlag = false; 
        inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + MULTIPLY.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    }
})

//divide button functionality
DIVIDE.addEventListener("click", () => {
    if (isNumber(inputBuffer.slice(-1))){
        decimalFlag = false;
        inputBuffer = inputBuffer + DIVIDE.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "+"){
        decimalFlag = false; 
        inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + DIVIDE.textContent;
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
    }
})

//equals button functionality 
EQUALS.addEventListener("click", () => {
    decimalFlag = false;
    tempstore = "";
    for (let i = 0; i < inputBuffer.length; i++){
        if (isNumber(inputBuffer[i]) || inputBuffer[i] === "."){
            tempstore = tempstore + inputBuffer[i]; 
        } else {
            operator = inputBuffer[i];
            if (!num1){
                num1 = Number(tempstore);
            } else {
                num2 = Number(tempstore);
                operate(operator, num1, num2); 
                num1 = result;
                num2 = null;
            }
            tempstore = "";
        }
    }
    if (tempstore != ""){
        if (!num1) {
            num1 = Number(tempstore)
        } else {
            num2 = Number(tempstore);
            operate(operator, num1, num2); 
            num1 = result;
            num2 = null;
        }
    }
    inputBuffer = "";
    operator = "";
    OUTPUTTEXT.textContent = String(num1);
    INPUTTEXT.textContent = "";
    num1 = null;
})

//keyboard functionality 
//consider wrapping the functionality in functions so the keypress can just call it
document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key === 'Escape') {
        INPUTTEXT.textContent = "";
        OUTPUTTEXT.textContent = "";
        num1 = null; 
        num2 = null; 
        operator = "";
        result = null;
        inputBuffer = "";
        decimalFlag = false;
    } else if (e.key === '(') {
        inputBuffer = inputBuffer + "(";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === ')') {
        inputBuffer = inputBuffer + ")";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === 'Backspace') {
        if (inputBuffer.slice(-1) == "."){
            decimalFlag = false;
        }
        inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1);
        INPUTTEXT.textContent = inputBuffer;
    } else if (e.key === '1') {
        inputBuffer = inputBuffer + "1";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '2') {
        inputBuffer = inputBuffer + "2";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '3') {
        inputBuffer = inputBuffer + "3";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '4') {
        inputBuffer = inputBuffer + "4";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '5') {
        inputBuffer = inputBuffer + "5";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '6') {
        inputBuffer = inputBuffer + "6";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '7') {
        inputBuffer = inputBuffer + "7";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '8') {
        inputBuffer = inputBuffer + "8";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '9') {
        inputBuffer = inputBuffer + "9";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '0') {
        inputBuffer = inputBuffer + "0";
        INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
    } else if (e.key === '.') {
        if (!decimalFlag){
            inputBuffer = inputBuffer + ".";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24);
            decimalFlag = true;
        }
    } else if (e.key === '+') {
        if (isNumber(inputBuffer.slice(-1))){
            decimalFlag = false;
            inputBuffer = inputBuffer + "+";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "÷"){
            decimalFlag = false; 
            inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + "+";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        }
    } else if (e.key === '-') {
        if (isNumber(inputBuffer.slice(-1))){
            decimalFlag = false;
            inputBuffer = inputBuffer + "-";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "+" || inputBuffer.slice(-1) == "÷"){
            decimalFlag = false; 
            inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + "-";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        }
    } else if (e.key === 'x') {
        if (isNumber(inputBuffer.slice(-1))){
            decimalFlag = false;
            inputBuffer = inputBuffer + "×";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        } else if (inputBuffer.slice(-1) == "+" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "÷"){
            decimalFlag = false; 
            inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + "×";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        }
    } else if (e.key === '/') {
        if (isNumber(inputBuffer.slice(-1))){
            decimalFlag = false;
            inputBuffer = inputBuffer + "÷";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        } else if (inputBuffer.slice(-1) == "×" || inputBuffer.slice(-1) == "-" || inputBuffer.slice(-1) == "+"){
            decimalFlag = false; 
            inputBuffer = inputBuffer.substring(0, inputBuffer.length - 1) + "÷";
            INPUTTEXT.textContent = inputBuffer.substring(inputBuffer.length - 24)
        }
    } else if (e.key === 'Enter') {
        decimalFlag = false;
        tempstore = "";
        for (let i = 0; i < inputBuffer.length; i++){
            if (isNumber(inputBuffer[i])){
                tempstore = tempstore + inputBuffer[i]; 
            } else {
                operator = inputBuffer[i];
                if (!num1){
                    num1 = Number(tempstore);
                } else {
                    num2 = Number(tempstore);
                    operate(operator, num1, num2); 
                    num1 = result;
                    num2 = null;
                }
                tempstore = "";
            }
        }
        if (tempstore != ""){
            if (!num1) {
                num1 = Number(tempstore)
            } else {
                num2 = Number(tempstore);
                operate(operator, num1, num2); 
                num1 = result;
                num2 = null;
            }
        }
        inputBuffer = "";
        operator = "";
        OUTPUTTEXT.textContent = String(num1);
        INPUTTEXT.textContent = "";
        num1 = null;
    }
})

//secret!!
const DISPLAY = BODY.querySelector(".display"); 
DISPLAY.addEventListener("click", () => {

})