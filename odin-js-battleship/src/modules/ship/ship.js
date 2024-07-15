const ship = (length) => {
    let hitCount = 0; 

    const isSunk = () => {
        if (hitCount === length) {
            return true;
        } 
    }

    const hit = () => {
        hitCount++;
        if (isSunk()) {
            return isSunk(); 
        } else {
            return hitCount;
        }
    }

    return {
        length,
        hit,
        isSunk,
    }
}

module.exports = ship;