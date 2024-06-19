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



