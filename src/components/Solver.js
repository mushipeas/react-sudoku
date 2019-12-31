import CalculateOptions from './CalculateOptions';
import CalculateUniqueOptions from './CalculateUniqueOptions';

export function iterateSolution1(grid, iterLeft = 1) {
  const optionsGrid = CalculateOptions(grid);
  const updates = {};
  iterLeft -= 1;
  console.log(`Run Sol 1. Iterations left: ${iterLeft}`);

  // determines elements that only have 1 option possible based on location
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

export function iterateSolution2(grid, iterLeft = 1) {
  const optionsGrid = CalculateOptions(grid);
  const uniqueOptionsGrid = CalculateUniqueOptions(optionsGrid);
  const updates = {};
  iterLeft -= 1;
  console.log(`Run Sol 2. Iterations left: ${iterLeft}`);

  for (let itemIndex in uniqueOptionsGrid) {
    let options = uniqueOptionsGrid[itemIndex];
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
    let rowIndex = Math.floor(itemIndex / 9);
    let colIndex = itemIndex - rowIndex * 9;
    console.log(`Changing ${rowIndex}:${colIndex},(${itemIndex})   :  ${updates[itemIndex]}`)
    grid[itemIndex] = updates[itemIndex];
  }
  return grid;
}

export default { iterateSolution1, iterateSolution2 };

// test case https://www.websudoku.com/?level=1&set_id=9052917801
