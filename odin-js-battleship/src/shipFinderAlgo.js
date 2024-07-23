const shipFinder = (grid) => {
    const directions = [
        [1, 0], // down
        [-1, 0], // up
        [0, 1], // right
        [0, -1] // left
    ];

    function isValid(x, y) {
        return x >= 0 && x < 10 && y >= 0 && y < 10 && (grid[x][y] !== 1 && grid[x][y] !== 0 && grid[x][y] !== -1);
    }

    function bfs(x, y) {
        const queue = [[x, y]];
        const shipCoordinates = [];
        grid[x][y] = 0; // mark as visited

        while (queue.length > 0 && shipCoordinates.length < 5) {
            const [cx, cy] = queue.shift();
            shipCoordinates.push([cx, cy]);

            for (const [dx, dy] of directions) {
                const nx = cx + dx;
                const ny = cy + dy;

                if (isValid(nx, ny) && shipCoordinates.length < 5) {
                    queue.push([nx, ny]);
                    grid[nx][ny] = 0; // mark as visited
                }
            }
        }

        return shipCoordinates;
    }

    const ships = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (grid[i][j] !== 1 && grid[i][j] !== 0 && grid[i][j] !== -1) {
                const ship = bfs(i, j);
                ships.push(ship);
            }
        }
    }

    return ships;
}

module.exports = shipFinder; 