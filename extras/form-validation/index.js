console.log('initiated');

const FORM = document.querySelector('form');
const EMAIL = document.querySelector("#email");
const COUNTRY = document.querySelector("#country");
const POSTAL = document.querySelector("#postal");
const PASSWORD = document.querySelector("#password");
const CONFIRM = document.querySelector("#passwordconfirm");

function emailValidity(email) {
    if (!email.checkValidity()) {
        email.setCustomValidity(''); 
        if (!email.validity.typeMismatch) {
            email.setCustomValidity('Hello... I asked for a FRICKIN email didnt I')
        } else if (!email.value.includes('@')) {
            email.setCustomValidity('Email got "@" right... where tf yours.');
        }
        email.classList.add('invalid');
        email.reportValidity();
        return false;
    } else {
        email.classList.remove('invalid');
        return true;
    }
}

function countryValidity(country) {
    country.setCustomValidity("");
    if (country.value === "") {
        country.setCustomValidity('dei, where you livin;');
        country.classList.add('invalid');
        country.reportValidity(); 
        return false; 
    } else {
        country.classList.remove('invalid'); 
        return true;
    }
}

function postalValidity(postal) {
    postal.setCustomValidity("");
    if (postal.validity.valueMissing || postal === undefined) {
        postal.setCustomValidity('please man, I need your postal');
        postal.classList.add('invalid');
        postal.reportValidity();
        return false;
    } else if (postal.value.length !== 6) {
        postal.setCustomValidity('a postal only has 6 digits right... where u think u goin..');
        postal.classList.add('invalid');
        postal.reportValidity();
        return false;
    } 
    postal.classList.remove('invalid')
    return true;
}

function matching(password, confirm) {
    if (password.value !== confirm.value) {
        confirm.setCustomValidity("MATCH YOUR PASSWORDS")
        confirm.classList.add('invalid');
        confirm.reportValidity();
        return false;
    } else {
        confirm.classList.remove('invalid');
        return true;
    }
}

function passwordValidity(password, confirm) {
    password.setCustomValidity("");
    if (password.validity.valueMissing || password === undefined) {
        password.setCustomValidity('hello.... password pleeeeeease'); 
        password.classList.add('invalid');
        password.reportValidity();
        return false;
    } else if (password.value.length < password.minLength) {
        password.setCustomValidity("please lah... make ur pw secure with 9 letters or more can...")
        password.classList.add('invalid');
        password.reportValidity();
        return false;
    } else {
        password.classList.remove('invalid');
        return (matching(password, confirm))
    }
}

function secret() {
    const secret = document.createElement("a"); 
    const otherSecret = document.createElement("h2"); 
    otherSecret.textContent = 'High Five!';
    otherSecret.classList.add('otherSecret');
    secret.classList.add('secret'); 
    secret.href = './index.html';
    document.body.appendChild(otherSecret);
    document.body.appendChild(secret);
}

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const ev = emailValidity(EMAIL);
    const cv = countryValidity(COUNTRY);
    const pv = postalValidity(POSTAL);
    const pwv = passwordValidity(PASSWORD, CONFIRM);
    if (ev && cv && pv && pwv) { 
        console.log('submitted!');
        document.body.removeChild(FORM);
        secret();
    } else {
        PASSWORD.value = ''; 
        CONFIRM.value = '';
    }
})

EMAIL.addEventListener('input', () => {
    emailValidity(EMAIL);
})

COUNTRY.addEventListener("blur", () => {
    countryValidity(COUNTRY);
})

POSTAL.addEventListener("input", () => {
    postalValidity(POSTAL);
})

PASSWORD.addEventListener("input", () => {
    passwordValidity(PASSWORD, CONFIRM);
})

CONFIRM.addEventListener("input", () => {
    passwordValidity(PASSWORD, CONFIRM);
})