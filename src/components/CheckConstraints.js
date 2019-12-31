import { get_row, get_col, get_square } from '../common/helper_functions';

class CheckConstraints {
    grid(grid) {
        return this.checkRows(grid) && this.checkColumns(grid) && this.checkSquares(grid);
    }
    
    checkRows(grid) {
        for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
            let row = get_row(grid, rowIndex);
            if (this.hasDuplicates(row)) { return false }
        }
        return true;
    }
    
    checkColumns(grid) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            let column = get_col(grid, columnIndex);
            if (this.hasDuplicates(column)) { return false }
        }
        return true;
    }
    
    checkSquares(grid) {
        for (let squareIndex = 0; squareIndex < 9; squareIndex++) {
            let square = get_square(grid, squareIndex)
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