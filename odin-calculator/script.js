let num1 = null; 
let num2 = null; 
let operator = "";
let result = null;
let displaynums = "";

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
    return num1 / num2;
}

function operate(operator, num1, num2){
    if (operator == "+"){
        result = add(num1, num2);
    } else if (operator == "-"){
        result = subtract(num1, num2);
    } else if (operator == "*"){
        result = multiply(num1, num2); 
    } else if (operator == "/"){
        result = divide(num1, num2);
    }
}

let body = document.body; 
let numtext = body.querySelector(".numtext");
let operatortext = body.querySelector(".operatortext");

//'button to display' functionality 
let temp = body.querySelectorAll(".numberbutton"); 
let numbuttons = [...temp]; 
numbuttons.forEach(button => {
    button.addEventListener("click", () => {
        displaynums = displaynums + button.textContent;
        numtext.textContent = displaynums.substring(displaynums.length - 9);
})})

//clear button functionality 
let clear = body.querySelector('#clearbutton'); 
clear.addEventListener("click", () => {
    numtext.textContent = "";
    operatortext.textContent = "";
    displaynums = "";
    num1 = null; 
    num2 = null; 
    operator = "";
})

//plus button functionality 
let plus = body.querySelector('#plusbutton'); 
plus.addEventListener("click", () => {
    operator = '+';
    operatortext.textContent = operator;
    if (!num1){
        num1 = Number(displaynums); 
    } else {
        num2 = Number(displaynums);
        result = add(num1, num2);
        num1 = result; 
        num2 = null; 
    }
    displaynums = ""; 
    numtext.textContent = "";
})

//equals button functionality 
let equals = body.querySelector('#equalsbutton');
equals.addEventListener("click", () => {
    if (num1 != null && num2 == null){
        operatortext.textContent = ""; 
        operator = ""; 
        numtext.textContent = num1; 
    } else if (num1 != null && num2 != null) {
        operate 
    }
})