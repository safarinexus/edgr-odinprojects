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
    if (READ.value === "") {
        LIBRARY.innerHTML += '<div class="book"><p>Book Title:</p><h5>' + TITLE.value + '</h5><p>Author:</p><h5>' + AUTHOR.value + '</h5><p>Pages:</p><h5>' + PAGES.value + '</h5><p>Read?</p><h5>&#x2717;</h5><button>Read</button><button>Remove</button></div>';
    } else {
        LIBRARY.innerHTML += '<div class="book"><p>Book Title:</p><h5>' + TITLE.value + '</h5><p>Author:</p><h5>' + AUTHOR.value + '</h5><p>Pages:</p><h5>' + PAGES.value + '</h5><p>Read?</p><h5>&#x2713;</h5><button>Read</button><button>Remove</button></div>';
    }
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
        displayBooks();
        TITLE.value = ""; 
        AUTHOR.value = "";
        PAGES.value = "";
        READ.value = "";
        DIALOG.close();
    }
});