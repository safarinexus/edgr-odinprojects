const ship = (name) => {
    let hitCount = 0; 
    let length = 0;
    const hit = () => {
        hitCount++;
    }

    switch (name) {
        case "Destroyer": 
            length = 5; 
            break; 

        case "Carrier": 
            length = 4; 
            break; 

        case "Battleship": 
            length = 3; 
            break; 

        case "Warship": 
            length = 3; 
            break; 

        case "Cruiser": 
            length = 2; 
            break;
    }
    

    const isSunk = () => {
        if (hitCount === length) {
            return true;
        } 
    }

    

    return {
        name,
        length,
        hit,
        isSunk,
    }
}

module.exports = ship;