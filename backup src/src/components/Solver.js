import CalculateOptions from './components/CalculateOptions';

export function Solver(grid) {
  const testSolverOnce = function iterateSolution(grid, true);
  console.log(testSolverOnce);
}

function iterateSolution(grid, once) {
  let solved = false;
  let optionsGrid = CalculateOptions(grid);
  let newGrid = {...grid};

  for (let itemIndex in optionsGrid) {
    let updates = {};
    let options = optionsGrid[index];
    if (options.length() === 1) {
      updates.[itemIndex] = options[0];
    };
  }

  for (let itemIndex in updates) {
    let rowIndex = Math.ceil(itemIndex/9);
    let colIndex = itemIndex-rowIndex*9;

    newGrid[rowIndex][colIndex] = updates[itemIndex];
  }

  console.table(newGrid);

  if (once||solved) return newGrid;
  else return null;
}
