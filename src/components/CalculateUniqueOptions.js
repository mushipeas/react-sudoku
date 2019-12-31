import { get_row, get_col, get_square, range } from '../common/helper_functions';

export function CalculateUniqueOptions(options) {
  const uniqueOptions = [];

  for (let rowIndex of range(0,9)) {
    let rowOptions_perRow = get_row(options, rowIndex); // whole row

    for (let colIndex of range(0, 9)) {
      let index = rowIndex*9 + colIndex;

      if (options[index] !== []) {
        let sqrIndex = Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3)
        
        let rowOptions = [...rowOptions_perRow]; // copy of whole row
        let colOptions = get_col(options, colIndex); // whole column
        let sqrOptions = get_square(options,sqrIndex); // whole square

        rowOptions.splice(colIndex, 1);
        colOptions.splice(rowIndex, 1);
        sqrOptions.splice(sqrIndex, 1);

        uniqueOptions[index] = (
          checkUniqueOptions(rowOptions, options[index]) //needs to be array of uniqueOptions
            .concat(checkUniqueOptions(colOptions, options[index]))
            .concat(checkUniqueOptions(sqrOptions, options[index])).splice(0, 1)
        );

      }
      else {
        uniqueOptions[index] = [];
      }
    }
  };
  return uniqueOptions;
}

function checkUniqueOptions(concatGrps, thisOptions) {
  let foundOptions = [];
  let concatAllGrps = concatGrps.reduce((prev, curr) => prev.concat(curr));

  for (let option of thisOptions) {
    if (!concatAllGrps.includes(option)) {
      foundOptions.push(option);
    }
  }
  return foundOptions;
}

export default CalculateUniqueOptions;
