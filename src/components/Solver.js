import CalculateOptions from './CalculateOptions';
import CalculateUniqueOptions from './CalculateUniqueOptions';

export function iterateSolution1(grid, iterLeft=1) {
  const optionsGrid = CalculateOptions(grid);
  const updates = {};
  iterLeft -= 1;
  console.log(`Run Sol 1. Iterations left: ${iterLeft}`);

  // determines boxes that only have 1 option possible based on location
  for (let itemIndex in optionsGrid) {
    let options = optionsGrid[itemIndex];
    if (options.length === 1) {
      updates[itemIndex] = options[0];
    };
  }

  // update grid
  if (Object.keys(updates).length === 0) {
    return {
      grid: grid,
      iterLeft: iterLeft
    } // stops iterations if there are no more updatable values
  }
  grid = updateGrid(grid, updates);

  // iterate till iterLeft 0
  if (iterLeft >= 1) {
    return iterateSolution1(grid, iterLeft)
  }
  else {
    return {
      grid: grid,
      iterLeft: iterLeft
    };
  }
}

export function iterateSolution2(grid, iterLeft=1) {
  const optionsGrid = CalculateOptions(grid);
  const optionsOptionsGrid = CalculateUniqueOptions(rowify(optionsGrid));
  const updates = {};
  iterLeft -= 1;
  console.log(`Run Sol 2. Iterations left: ${iterLeft}`);

  // determines boxes that only have 1 option possible based on location
  for (let itemIndex in optionsOptionsGrid) {
    let options = optionsOptionsGrid[itemIndex];
    if (options.length === 1) {
      updates[itemIndex] = options[0];
    };
  }

  // update grid
  if (Object.keys(updates).length === 0) {
    return {
      grid: grid,
      iterLeft: iterLeft
    } // stops iterations if there are no more updatable values
  }

  grid = updateGrid(grid, updates);

  // iterate
  if (iterLeft >= 1) {
    return iterateSolution2(grid, iterLeft)
  }
  else {
    return {
      grid: grid,
      iterLeft: iterLeft
    };
  }
}

// update grid
function updateGrid(grid, updates) {
  for (let itemIndex in updates) {
    let rowIndex = Math.floor(itemIndex/9);
    let colIndex = itemIndex-rowIndex*9;
    console.log(`Changing ${rowIndex}:${colIndex},(${itemIndex})   :  ${updates[itemIndex]}`)
    grid[rowIndex][colIndex] = updates[itemIndex];
  }
  return grid;
}

// needed because of the structural diff. between grid and optionsGrid - needs to be commonised later.
// will probably need a 'row' function in CalculateOptions as exists for col and sqr.
export function rowify(optionsGrid) {
  let output = new Array(9).fill("").map(() => new Array(9).fill("").map(() => ""));
  for (let rowIndex in output) {
    for (let colIndex in output) {
      output[rowIndex][colIndex] = optionsGrid[Number(colIndex)+Number(rowIndex)*9];
    }
  }
  //console.log(output)
  return output;
}

export default { iterateSolution1, iterateSolution2, rowify };

// test case https://www.websudoku.com/?level=1&set_id=9052917801
