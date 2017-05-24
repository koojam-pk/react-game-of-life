export function makeGrid(size, clearAll=false) {
    let grid = [];
    for (var g=0; g<size.height; g++) {
        var row = [];
        for (var r=0; r<size.width; r++) {
            var value = false;
            if (!clearAll) {
                value = Math.round(Math.random());
            }
            row.push({status:value, newBorn:value});
        }
        grid.push(row);
    }
    return grid;
}


export const checklifeState = function(grid = []) {
    let gridRow = grid.length;
    let gridCol = grid[0].length;
    let gameState = [];

    let getNoOfNeighbours = function(r, c) {
        var count = 0 ;

        for (var r1=r-1; r1<=r+1; r1++) {
            for (var c1=c-1; c1<=c+1; c1++) {
                if (!(c1 === c && r1 === r)) {
                    if (c1 > -1 && r1 > -1 && c1 < gridCol && r1 < gridRow) {
                        count += grid[r1][c1].status;
                    }
                }
            }
        }
        return count;
    }

    for (var r=0; r<gridRow; r++){
        let row = [];
        for (var c=0; c<gridCol; c++) {
            let isAlive = grid[r][c].status;
            let noOfNeighbours = getNoOfNeighbours(r, c);
            if (isAlive) {
                if (noOfNeighbours > 1 && noOfNeighbours < 4) {
                    row.push({status: 1});
                } else {
                    row.push({status: 0});
                }
            }
            if (!isAlive) {
                if (noOfNeighbours === 3) {
                    row.push({status: 1, newBorn: true});
                } else {
                    row.push({status: 0});
                }
            }
        }
        gameState.push(row);
    }
    return gameState;
}
