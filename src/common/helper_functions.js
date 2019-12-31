
export function clone_deep(grid) {
    let gridClone = [];
    for (let row of grid) {
        gridClone.push([...row]);
    }
    return gridClone;
}

export function get_row(grid, rowIndex) {
    return grid.slice(rowIndex * 9, rowIndex * 9 + 9);
}

export function get_col(grid, columnIndex) {
    let column = []
    for (let index = columnIndex; index < 81; index += 9) {
        column.push(grid[index])
    }
    return column
}

export function get_square(grid, squareIndex) {
    const square = [];
    for (let row = 0; row < 3; row++) {
        let start = Math.floor(squareIndex / 3) * 27 + squareIndex % 3 * 3 + row * 9;
        square.push(...grid.slice(start, start + 3));
    }
    return square
}

export function* range(start, end) {
    for (let i = start; i < end; i++) {
        yield i;
    }
}