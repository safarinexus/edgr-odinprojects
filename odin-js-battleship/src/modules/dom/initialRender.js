const renderPlayer = require('./renderPlayer');
const renderCPU = require("./renderCPU");

const initialRender = (p1, p2) => {
    const P1BOARD = document.querySelector('#p1'); 
    const P2BOARD = document.querySelector('#p2'); 
    const STARTBUTTON = document.querySelector('.startButton'); 

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
                        label.style.textAlign = "center";
                        label.innerHTML =  name;
                        if (player === 1) { 
                            P1BOARD.appendChild(label);
                        } else { 
                            P2BOARD.appendChild(label);
                        }
                    } else { //empty label for top left of board
                        const label = document.createElement("div");
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
                        label.innerHTML = row;
                        if (player === 1) { 
                            P1BOARD.appendChild(label);
                        } else { 
                            P2BOARD.appendChild(label);
                        }
                    } else {
                        const label = document.createElement("div");
                        label.classList.add('square'); 
                        label.style.border = '1px solid #999';
                        label.style.height = '100%'; 
                        label.style.width = '100%';
                        if (player === 1) { 
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

    STARTBUTTON.addEventListener("click", () => {
        //temporarily random place ships 
        p1.getBoard().randomiseShips();
        p2.getBoard().randomiseShips();
        renderPlayer(true, p1);
        renderCPU(false, p2, p1);
        //engine.gameStart(p1, p2);

        //hehe
    })

}

module.exports = initialRender;