import { get_row, get_col, get_square, range} from '../common/helper_functions';

export function CalculateOptions(grid) {
  const options = [];

  for (let rowIndex of range(0,9)) {
    let row = get_row(grid, rowIndex); // whole row

    for (let colIndex of range(0, 9)) {
      let index = Number(rowIndex) * 9 + Number(colIndex)
      if (grid[index] === "") {
        let col = get_col(grid, colIndex); // whole column
        let sqIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3)
        let sqr = get_square(grid, sqIndex); // whole square

        let concatGrps = [].concat(row).concat(col).concat(sqr);

        options[index] = checkOptions(concatGrps); //needs to be array of options

      }
      else {
        options[index] = [];
      }
    }
  };

  return options;
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
