import CalculateOptions from './CalculateOptions';
import IsSolutionCorrect from './IsSolutionCorrect';

const isSolCorrect = new IsSolutionCorrect();

class BruteSolve {
  constructor() {
    this.iterations = 0;
    this.maxIterations = 10000;
  }

  solve(grid) {
    this.iterations = 0;
    let iterativelyFilledGrid = this.iterativelyFillGrid(grid);
    if (iterativelyFilledGrid) {
      return iterativelyFilledGrid;
    } else {
      return grid;
    }
  }

  iterativelyFillGrid(grid, [row, col] = [0, 0]) {

    this.iterations++;

    if (this.iterations > this.maxIterations) {
      console.table(grid);
      console.log(`iterations: ${this.iterations}`)
      throw new Error('Unsolvable');
    }

    let options = CalculateOptions(grid);
    let optionsForElement = options[row * 9 + col];

    if (options.filter((x) => x.length !== 0).length + grid.flat().filter((x) => x.length !== 0).length < 81) return false;

    if (row === 8 && col === 8) {
      if (grid[row][col] === "") grid[row][col] = options[row * 9 + col];
      console.log(`Completed in : ${this.iterations} iterations.`);
      if (isSolCorrect.checkGrid(grid)) return grid;
      else return false
    }

    //next coordinate if the current one is filled. Branch out of possible options if unfilled.
    if (optionsForElement.length === 0) {

      if (grid[row][col] === "") return false;
      let returnedVal = this.iterativelyFillGrid(grid, this.nextCoordinate(row, col));
      if (returnedVal) return returnedVal;

    } else {
      for (let option of optionsForElement) {

        // console.log(`trying ${option} of ${optionsForElement} at : [${[row, col]}]`)

        let newGrid = this.cloneDeep(grid);
        newGrid[row][col] = option;

        let returnedVal = this.iterativelyFillGrid(newGrid, this.nextCoordinate(row, col));
        if (returnedVal) return returnedVal;

        // console.log(`branch ${option} of ${optionsForElement} at : [${[row, col]}] failed`)

      }
    }

    return false;
  }

  nextCoordinate(row, col) {
    if (col < 8) {
      col++;
    } else if (row < 8) {
      row++;
      col = 0;
    }
    return [row, col];
  }

  cloneDeep(grid) {
    let gridClone = [];
    for (let row of grid) {
      gridClone.push([...row]);
    }
    return gridClone;
  }

  // update grid //copied from solver.js. Needs consolidation later.
  updateGrid(grid, updates) {
    for (let itemIndex in updates) {
      let rowIndex = Math.floor(itemIndex / 9);
      let colIndex = itemIndex - rowIndex * 9;
      console.log(`Changing ${rowIndex}:${colIndex},(${itemIndex})   :  ${updates[itemIndex]}`)
      grid[rowIndex][colIndex] = updates[itemIndex];
    }
    return grid;
  }
}

export default BruteSolve