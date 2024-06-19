console.log('initiated');

const FORM = document.querySelector('form');

FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('submitted!');
})

