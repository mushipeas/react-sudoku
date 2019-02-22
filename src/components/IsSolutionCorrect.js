// 'checkGrid should be called - outputs a boolean confirmation if the sudoku grid meets completion criteria.

class IsSolutionCorrect {
    checkGrid(grid) {
        return this.checkRows(grid) && this.checkColumns(grid) && this.checkSquares(grid);
    }
    
    checkRows(grid) {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            let row = grid[rowIndex];
            if (!this.containsOneToNine(row)) { return false }
        }
        return true;
    }
    
    checkColumns(grid) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            let column = grid.map(row => row[columnIndex]);
            if (!this.containsOneToNine(column)) { return false }
        }
        return true;
    }
    
    checkSquares(grid) {
        for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
            let square = grid.filter((val, rowIndex) => Math.floor(rowIndex / 3) === Math.floor(squareIndex / 3))
                             .map(x => x.slice((squareIndex % 3) * 3, (squareIndex % 3) * 3 + 3))
                             .flat();
            if (!this.containsOneToNine(square)) { return false }
        }
        return true;
    }
    
    containsOneToNine(numbers) {
        for (let i = 1; i <= 9; i++) {
            if (!numbers.includes(i)) { return false }
        }
        return true;
    }
}

export default IsSolutionCorrect