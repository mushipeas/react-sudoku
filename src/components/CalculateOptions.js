export function CalculateOptions(grid) {
  const options = {};

  for (let rowIndex in grid) {
    let row = grid[rowIndex]; // whole row

    for (let colIndex in grid[rowIndex]) {
      if (grid[rowIndex][colIndex] === "") {
        let col = column(colIndex, grid); // whole column
        let sqr = square(rowIndex, colIndex, grid); // whole square

        let concatGrps = [].concat(row).concat(col).concat(sqr);

        options[Number(rowIndex) * 9 + Number(colIndex)] = checkOptions(concatGrps); //needs to be array of options

      }
      else {
        options[Number(rowIndex) * 9 + Number(colIndex)] = [];
      }
    }
  };

  return options;
}

// returns array containing column values from grid at [colIndex]
function column(colIndex, grid) {
  let col = [];
  for (let rowIndex in grid) {
    col.push(grid[rowIndex][colIndex]);
  }
  return col;
}

// returns array containing values in the square of the value at [rowIndex][colIndex]
function square(rowIndex, colIndex, grid) {
  let sqrWidth = 3;
  let sqr = new Array(sqrWidth * sqrWidth).fill("");

  let newSqr = sqr.map((val, sqrIndex) => {
    let rowId = Math.floor(sqrIndex / sqrWidth) + sqrWidth * Math.floor(rowIndex / sqrWidth);
    let colId = sqrIndex - sqrWidth * Math.floor(sqrIndex / sqrWidth) + sqrWidth * Math.floor(colIndex / sqrWidth);
    return grid[rowId][colId];
  });

  return newSqr;
}

// assumes possible values are 1 - 9
function checkOptions(concatGrps) {
  let possibleOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let foundOptions = [];

  for (let option of possibleOptions) {
    if (!concatGrps.includes(option)) {
      foundOptions.push(option);
    }
  }
  return foundOptions;
}

export default CalculateOptions;
