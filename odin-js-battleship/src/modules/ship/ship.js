const ship = (length) => {
    let hitCount = 0; 

    const isSunk = () => {
        if (hitCount === length) {
            return true;
        } 
    }

    const hit = () => {
        hitCount++;
    }

    return {
        length,
        hit,
        isSunk,
    }
}

module.exports = ship;