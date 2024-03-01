let body = document.body;
let contain = document.createElement("div");
contain.className = "container";
body.appendChild(contain);
for (let i = 0; i < 16; i++){
    let row = document.createElement("div");
    row.className = `row${i + 1}`;
    for (let j = 0; j < 16; j++){ 
        let div = document.createElement("div"); 
        div.className = `${i + 1, j + 1}`;
        div.id = "gridsquare";
        div.style.height = "10px"; 
        div.style.width = "10px";
        div.style.border = "1px solid gray";
        div.addEventListener("mouseenter", (e) => {
            console.log(e.target); 
            div.style.backgroundColor = "gray";
        })
        row.appendChild(div);
    }
    row.style.display = "flex"; 
    contain.appendChild(row);
};
let button = document.createElement("button"); 
button.className = "resetbutton";
button.textContent = "Reset";
button.addEventListener("click", (e) => {
    console.log(e);
    let grid = body.querySelectorAll("#gridsquare");
    grid.forEach((square) => {
        square.style.backgroundColor = "white";
    })
}); 
body.insertBefore(button, contain);