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
        this.toggle = function() {
            if (this.read) {
                this.read = false;
            } else {
                this.read = true;
            }
        }
    }

const myLibrary = [];


function addBookToLibrary(title, author, pages, read=false) {
    let temp = new Book(title, author, pages, read); 
    myLibrary.push(temp);
}

function clear() {
    LIBRARY.innerHTML = "";
}

function renderButtons() {
    for (let i=0; i < myLibrary.length; i++) {
        document.querySelector("#change" + i).addEventListener("click", () => {
            myLibrary[i].toggle();
            displayBooks();
        }); 
        document.querySelector("#remove" + i).addEventListener("click", () => {
            myLibrary.splice(i, 1); 
            displayBooks();
        }); 
    }
}

function displayBooks() {
    let count = 0;  
    clear();
    myLibrary.forEach(function(book) {
        if (book.read) {
            LIBRARY.innerHTML += '<div class="book"><p>Book Title:</p><h5>' + book.title + '</h5><p>Author:</p><h5>' + book.author + '</h5><p>Pages:</p><h5>' + book.pages + '</h5><p>Read?</p><h5>&#x2713;</h5><button id="change' + count + '">Read</button><button id="remove' + count + '">Remove</button></div>';
        } else {
            LIBRARY.innerHTML += '<div class="book"><p>Book Title:</p><h5>' + book.title + '</h5><p>Author:</p><h5>' + book.author + '</h5><p>Pages:</p><h5>' + book.pages + '</h5><p>Read?</p><h5>&#x2717;</h5><button id="change' + count + '">Read</button><button id="remove' + count + '">Remove</button></div>';
        }
        count++;
    })
    renderButtons();
}

const DIALOG = document.querySelector("dialog");
const OPEN = document.querySelector(".open");
const CLOSE = document.querySelector(".close");
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
        addBookToLibrary(TITLE.value, AUTHOR.value, PAGES.value, READ.checked);
        displayBooks();
        TITLE.value = ""; 
        AUTHOR.value = "";
        DIALOG.close();
    }
});