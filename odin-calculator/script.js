/*
functionalities to add: 
1. convert into scientific calculator style 
2. put button functions into functions to add into keypress 
3. complete keyboard functionality
4. add backspace button
5. add dark mode

*/ 

//variables to help with calculations
let num1 = null; 
let num2 = null; 
let operator = "";
let result = null;
let displaynums = "";

//operation functions
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
const NUMTEXT = BODY.querySelector(".numtext");
const OPERATORTEXT = BODY.querySelector(".operatortext");

//keyboard functionality 
//consider wrapping the functionality in functions so the keypress can just call it
document.addEventListener("keydown", (e) => {
    console.log(e);
    if (e.key == "1"){
        displaynums = displaynums + "1";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "2"){
        displaynums = displaynums + "2";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "3"){
        displaynums = displaynums + "3";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "4"){
        displaynums = displaynums + "4";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "5"){
        displaynums = displaynums + "5";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "6"){
        displaynums = displaynums + "6";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "7"){
        displaynums = displaynums + "7";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "8"){
        displaynums = displaynums + "8";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "9"){
        displaynums = displaynums + "9";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    } else if (e.key == "0"){
        displaynums = displaynums + "0";
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    }
})

//number buttons functionality 
const TEMP = BODY.querySelectorAll(".numberbutton"); 
const NUMBUTTONS = [...TEMP]; 
NUMBUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        displaynums = displaynums + button.textContent;
        NUMTEXT.textContent = displaynums.substring(displaynums.length - 9);
    })
})

//clear button functionality 
const CLEARBUTTON = BODY.querySelector('#clearbutton'); 
CLEARBUTTON.addEventListener("click", () => {
    NUMTEXT.textContent = "";
    OPERATORTEXT.textContent = "";
    displaynums = "";
    num1 = null; 
    num2 = null; 
    operator = "";
})

//plus button functionality 
const PLUSBUTTON = BODY.querySelector('#plusbutton'); 
PLUSBUTTON.addEventListener("click", () => {
    OPERATORTEXT.textContent = '+';
    if (!num1){
        num1 = Number(displaynums); 
        NUMTEXT.textContent = "";
        displaynums = ""
    } else if (num1 && displaynums != "") {
        num2 = Number(displaynums);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 

    }
    operator = "+";
})

//minus button functionality
const MINUSBUTTON = BODY.querySelector('#minusbutton'); 
MINUSBUTTON.addEventListener("click", () => {
    OPERATORTEXT.textContent = '-';
    if (!num1){
        num1 = Number(displaynums); 
    } else if (num1 && displaynums != "") {
        num2 = Number(displaynums);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 
    }
    operator = "-";
    displaynums = ""; 
    NUMTEXT.textContent = "";
})


//multiply button functionality
const MULTIPLYBUTTON = BODY.querySelector('#multiplybutton'); 
MULTIPLYBUTTON.addEventListener("click", () => {
    OPERATORTEXT.textContent = '×';
    if (!num1){
        num1 = Number(displaynums); 
    } else if (num1 && displaynums != "") {
        num2 = Number(displaynums);
        operate(num1, num2);
        num1 = result; 
        num2 = null; 
    }
    operator = "×";
    displaynums = ""; 
    NUMTEXT.textContent = "";
})

//divide button functionality
const DIVIDEBUTTON = BODY.querySelector('#dividebutton'); 
DIVIDEBUTTON.addEventListener("click", () => {
    if (!num1){
        num1 = Number(displaynums); 
        operator = "÷";
        displaynums = ""; 
        NUMTEXT.textContent = ""; 
        OPERATORTEXT.textContent = "÷";
    } else if (num1 && displaynums != "") {
        num2 = Number(displaynums);
        operate(num1, num2);
        if (result == "ERROR"){
            NUMTEXT.textContent = result;
            OPERATORTEXT.textContent = "";
            displaynums = ""; 
            num1 = null; 
            num2 = null;
            operator = "";
            result = null;
        } else {
            operator = "÷";
            num1 = result; 
            num2 = null; 
            displaynums = "";
            NUMTEXT.textContent = ""; 
            OPERATORTEXT.textContent = "÷";
        } 
    } else {
        displaynums = ""; 
        NUMTEXT.textContent = ""; 
        OPERATORTEXT.textContent = "÷";
    }
})

//equals button functionality 
//consider putting the equals function into the operator buttons since it 'equals' if there is a second number
//alternatively, you can consider doing the functionality like a scientific calculator
const EQUALS = BODY.querySelector('#equalsbutton');
EQUALS.addEventListener("click", () => {
    if (num1 != null) {
        if (displaynums != ""){
            num2 = Number(displaynums);
            operate(operator, num1, num2);  
            OPERATORTEXT.textContent = "";
                if (result != "ERROR"){
                    num1 = result;
                } else {
                    num1 = null;
                }
            NUMTEXT.textContent = String(result);
            displaynums = "";
            num2 = null; 
            operator = "";
            result = null; 
        } else {
            NUMTEXT.textContent = String(num1);
        }
    }
})