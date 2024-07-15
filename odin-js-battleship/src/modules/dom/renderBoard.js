const renderBoard = () => {
    const P1BOARD = document.querySelector('#p1'); 
    const P2BOARD = document.querySelector('#p2'); 

    for (let player = 1; player < 3; player++) { 
        for (let row = 0; row < 11; row++) { 
            for (let column = 0; column < 11; column++) { 
                //render col labels
                if (row === 0) {
                    if (column !== 0) {
                        const label = document.createElement("h4"); 
                        const name = String.fromCharCode(64 + column);
                        label.classList.add('col-label'); 
                        label.id = 'col-' + name;
                        label.style.margin = '0'; 
                        label.style.backgroundColor = '#222'; 
                        label.style.textAlign = "center";
                        label.innerHTML =  name;
                        if (player === 1) { 
                            P1BOARD.appendChild(label);
                        } else { 
                            P2BOARD.appendChild(label);
                        }
                    } else { //empty label for top left of board
                        const label = document.createElement("div");
                        label.style.backgroundColor = '#222';
                        if (player === 1) { 
                            P1BOARD.appendChild(label);
                        } else { 
                            P2BOARD.appendChild(label);
                        }
                    }
                } else { //render rows
                    if (column === 0) { //row labels
                        const label = document.createElement("h4");     
                        label.classList.add('row-label'); 
                        label.style.textAlign = "end";
                        label.id = 'row-' + row;
                        label.style.margin = '0'; 
                        label.style.paddingRight = '10px';
                        label.style.backgroundColor = '#222'; 
                        label.innerHTML =  row;
                        if (player === 1) { 
                            P1BOARD.appendChild(label);
                        } else { 
                            P2BOARD.appendChild(label);
                        }
                    } else { //render playable area
                        const label = document.createElement("div");
                        label.classList.add('square'); 
                        label.style.backgroundColor = '#222'; 
                        label.style.cursor = 'pointer';
                        label.style.border = '0.5px solid #999';
                        if (player === 1) { 
                            label.addEventListener("click", () => {})
                            label.id = "p1-" + row + "-" + column;
                            P1BOARD.appendChild(label);
                        } else { 
                            label.id = "p2-" + row + "-" + column;
                            P2BOARD.appendChild(label);
                        }
                    }
                }
            }
        }
    }
}

module.exports = renderBoard;