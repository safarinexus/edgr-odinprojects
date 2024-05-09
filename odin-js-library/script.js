function Book(title, author, pages, read) {
        this.title = title; 
        this.author = author;  
        this.pages = pages;
        this.read = read;
        this.info = function() {
            if (this.read) {
                return `${this.title} by ${this.author}, ${this.pages} pages, read already`;
            } else {
                return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
            }
        }
    }

const myLibrary = [];

function addBookToLibrary(title, author, pages, read=false) {
    let temp = new Book(title, author, pages, read); 
    myLibrary.push(temp);
    return;
}

function displayBooks() {
    myLibrary.map((element) => console.log(element));
}

const DIALOG = document.querySelector("dialog");
const OPEN = document.querySelector(".open");
const CLOSE= document.querySelector(".close");
const ADD = document.querySelector(".add");
const TITLE = document.querySelector("#title");
const AUTHOR = document.querySelector("#author");
const PAGES = document.querySelector("#pages");
const READ = document.querySelector("#read");
const LIBRARY = document.querySelector(".library");

OPEN.addEventListener("click", () => {
    DIALOG.showModal();
});

CLOSE.addEventListener("click", () => {
    DIALOG.close();
});

ADD.addEventListener("click", (e) => {
    if (TITLE.value !== "") {
        e.preventDefault(); 
        addBookToLibrary(TITLE.value, AUTHOR.value, PAGES.value, READ.value);
        TITLE.value = ""; 
        AUTHOR.value = "";
        PAGES.value = "";
        READ.value = "";
        displayBooks();
        DIALOG.close();
    }
}); 

