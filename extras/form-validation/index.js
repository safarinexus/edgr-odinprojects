console.log('initiated');

const FORM = document.querySelector('form');
const EMAIL = document.querySelector("#email");
const COUNTRY = document.querySelector("#country");
const POSTAL = document.querySelector("#postal");
const PASSWORD = document.querySelector("#password");
const CONFIRM = document.querySelector("#passwordconfirm");

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submitted!');
})

EMAIL.addEventListener("input", () => {
    if (EMAIL.validity.valueMissing) {
        EMAIL.setCustomValidity("OI, EMAIL WHERE??!?");
    } else if (EMAIL.validity.typeMismatch) {
      EMAIL.setCustomValidity("I am expecting an EMAIL ADDRESS!!!");
    }
});

POSTAL.addEventListener("input", (event) => {
    if (POSTAL.validity.typeMismatch) {
      POSTAL.setCustomValidity("WHERE'S YOUR BLOODY POSTAL COOOOODDEEEE!!!");
    } else {
      POSTAL.setCustomValidity("");
    }
});

