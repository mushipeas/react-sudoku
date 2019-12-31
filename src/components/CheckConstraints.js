class CheckConstraints {
    grid(grid) {
        return this.checkRows(grid) && this.checkColumns(grid) && this.checkSquares(grid);
    }
    
    checkRows(grid) {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            let row = grid.slice(rowIndex*9, rowIndex*9 + 9);
            if (this.hasDuplicates(row)) { return false }
        }
        return true;
    }
    
    checkColumns(grid) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            let column = []
            for (let index = columnIndex; index < 81; index += 9) {
                column.push(grid[index])
            }
            if (this.hasDuplicates(column)) { return false }
        }
        return true;
    }
    
    checkSquares(grid) {
        for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
            const square = [];
            for (let row = 0; row < 3; row++) {
                let start = Math.floor(squareIndex / 3) * 27 + squareIndex % 3 * 3 + row * 9;
                square.push(...grid.slice(start, start+3));
            }
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