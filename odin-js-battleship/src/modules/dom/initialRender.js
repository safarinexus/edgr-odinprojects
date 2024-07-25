const initialRender = () => {
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
                        label.style.position = "relative"; 
                        if (player === 1) { 
                            label.id = "p1-" + row + "-" + column;
                            P1BOARD.appendChild(label);
                            label.addEventListener('dragover', (e) => {
                                e.preventDefault();
                                label.style.boxShadow = "0px 0px 1px 1px lightblue"; 
                                e.dataTransfer.dropEffect = 'move';
                            });

                            label.addEventListener('dragleave', (e) => {
                                e.preventDefault();
                                label.style.boxShadow = ""; 
                            });
                        
                            label.addEventListener('drop', (e) => {
                                e.preventDefault();
                                label.style.boxShadow = "";
                                const id = e.dataTransfer.getData('text/plain');
                                const draggableElement = document.getElementById(id);
                                draggableElement.setAttribute("x", row - 1); 
                                draggableElement.setAttribute("y", column - 1);
                                label.appendChild(draggableElement);
                                e.dataTransfer.clearData();
                            });
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

module.exports = initialRender;