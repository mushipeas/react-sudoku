import { get_row, get_col, get_square } from '../common/helper_functions';

class CheckConstraints {
    element(grid, index) {
        return this.checkRow(grid, index) && this.checkColumn(grid, index) && this.checkSquare(grid, index) 
    }

    checkRow(grid, index) {
        let rowIndex = Math.floor(index / 9);
        let row = get_row(grid, rowIndex);
        if (this.hasDuplicates(row)) { return false }
        return true;
    }

    checkColumn(grid, index) {
        let columnIndex = index % 9;
        let column = get_col(grid, columnIndex);
        if (this.hasDuplicates(column)) { return false }
        return true;
    }
    
    checkSquare(grid, index) {
        let squareIndex = Math.floor(Math.floor(index / 9) / 3) * 3 + Math.floor((index % 9) / 3);
        let square = get_square(grid, squareIndex)
        if (this.hasDuplicates(square)) { return false }
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