/*
functionalities to add: 
1. fix formatting for display text
2. put button functions into functions to add into keypress 
3. complete keyboard functionality
*/ 

//variables to help with calculations
let num1 = null; 
let num2 = null; 
let operator = "";
let result = null;
let inputhold = "";
let outputhold = "";
let decimalflag = false;

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


//number buttons functionality 
NUMBUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        inputhold = inputhold + button.textContent;
        INPUTTEXT.textContent = inputhold.substring(inputhold.length - 24);
    })
})

//parentheses functionality 

//decimal functionality
DECIMAL.addEventListener("click", () => {
    if (!decimalflag){
        inputhold = inputhold + DECIMAL.textContent;
        INPUTTEXT.textContent = inputhold.substring(inputhold.length - 24);
        decimalflag = true;
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
    inputhold = "";
    outputhold = "";
    decimalflag = false;
})

//backspace functionality
BACKSPACE.addEventListener("click", () => {

})


//plus button functionality 
PLUS.addEventListener("click", () => {
    if (!num1){
        num1 = Number(displayhold); 
        DISPLAY = "";
        displayhold = ""
    } else if (num1 && displayhold != "") {
        num2 = Number(displayhold);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 

    }
    operator = "+";
})

//minus button functionality 
MINUS.addEventListener("click", () => {
    if (!num1){
        num1 = Number(displayhold); 
    } else if (num1 && displayhold != "") {
        num2 = Number(displayhold);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 
    }
    operator = "-";
    displayhold = ""; 
    DISPLAY = "";
})


//multiply button functionality
MULTIPLY.addEventListener("click", () => {
    if (!num1){
        num1 = Number(displayhold); 
    } else if (num1 && displayhold != "") {
        num2 = Number(displayhold);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 
    }
    operator = "×";
    displayhold = ""; 
    DISPLAY = "";
})

//divide button functionality
DIVIDE.addEventListener("click", () => {
    if (!num1){
        num1 = Number(displayhold); 
        operator = "÷";
        displayhold = ""; 
        DISPLAY = ""; 
    } else if (num1 && displayhold != "") {
        num2 = Number(displayhold);
        operate(num1, num2);
        if (result == "ERROR"){
            DISPLAY = result;
            displayhold = ""; 
            num1 = null; 
            num2 = null;
            operator = "";
            result = null;
        } else {
            operator = "÷";
            num1 = result; 
            num2 = null; 
            displayhold = "";
            DISPLAY = ""; 
        } 
    } else {
        displayhold = ""; 
        DISPLAY = ""; 
    }
})

//equals button functionality 
//consider putting the equals function into the operator buttons since it 'equals' if there is a second number
//alternatively, you can consider doing the functionality like a scientific calculator
EQUALS.addEventListener("click", () => {
    if (num1 != null) {
        if (displayhold != ""){
            num2 = Number(displayhold);
            operate(operator, num1, num2);  
                if (result != "ERROR"){
                    num1 = result;
                } else {
                    num1 = null;
                }
            DISPLAY = String(result);
            displayhold = "";
            num2 = null; 
            operator = "";
            result = null; 
        } else {
            DISPLAY = String(num1);
        }
    }
})

//keyboard functionality 
//consider wrapping the functionality in functions so the keypress can just call it
document.addEventListener("keydown", (e) => {
    console.log(e);
})