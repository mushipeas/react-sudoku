class CheckConstraints {
    grid(grid) {
        return this.checkRows(grid) && this.checkColumns(grid) && this.checkSquares(grid);
    }
    
    checkRows(grid) {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            let row = grid[rowIndex];
            if (this.hasDuplicates(row)) { return false }
        }
        return true;
    }
    
    checkColumns(grid) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            let column = grid.map(row => row[columnIndex]);
            if (this.hasDuplicates(column)) { return false }
        }
        return true;
    }
    
    checkSquares(grid) {
        for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
            let square = grid.filter((val, rowIndex) => Math.floor(rowIndex / 3) === Math.floor(squareIndex / 3))
                             .map(x => x.slice((squareIndex % 3) * 3, (squareIndex % 3) * 3 + 3))
                             .flat();
            if (this.hasDuplicates(square)) { return false }
        }
        return true;
    }
    
    hasDuplicates(numbers) {
        var counts = [];
        for(var i = 0; i <= numbers.length; i++) {
            if(counts[numbers[i]] === undefined) {
                counts[numbers[i]] = 1;
            } else if (numbers[i] !== "") {
                return true;
            }
        }
        return false;
    }
}

export default CheckConstraints