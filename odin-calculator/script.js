let number1 = null; 
let number2 = null; 
let operator = "";
let result = null;

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
let displaytext = body.querySelector(".displaytext");

//'button to display' functionality 
let temp = body.querySelectorAll(".numberbutton"); 
let numbuttons = [...temp]; 
numbuttons.forEach(button => {
    button.addEventListener("click", () => {
    displaytext.textContent = displaytext.textContent + button.textContent;
})})

//clear button functionality 
let clear = body.querySelector('#clearbutton'); 
clear.addEventListener("click", () => {
    displaytext.textContent = "";
    number1 = null; 
    number2 = null; 
    operator = "";

})

//plus button functionality 
let plus = body.querySelector('#plusbutton'); 
plus.addEventListener("click", () => {
    displaytext.textContent = "+ ";
    operator = "+";
})