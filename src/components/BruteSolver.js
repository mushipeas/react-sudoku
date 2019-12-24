import CalculateOptions from './CalculateOptions';
import IsSolutionCorrect from './IsSolutionCorrect';
import CheckConstraints from './CheckConstraints';

const isSolCorrect = new IsSolutionCorrect();
const constraints_met = new CheckConstraints();

class BruteSolve {
  constructor() {
    this.iterations = 0;
    this.maxIterations = 100000;
  }

  solve(grid) {
    this.iterations = 0;
    let iterativelyFilledGrid = this.iterativeFill(grid);
    if (iterativelyFilledGrid) {
      return {
        grid: iterativelyFilledGrid
      };
    } else {
      return {
        grid: grid
      };
    }
  }

  recursivelyFillGrid(grid, [row, col] = [0, 0]) {

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
      let returnedVal = this.recursivelyFillGrid(grid, this.nextCoordinate(row, col));
      if (returnedVal) return returnedVal;

    } else {
      for (let option of optionsForElement) {

        // console.log(`trying ${option} of ${optionsForElement} at : [${[row, col]}]`)

        let newGrid = this.cloneDeep(grid);
        newGrid[row][col] = option;

        let returnedVal = this.recursivelyFillGrid(newGrid, this.nextCoordinate(row, col));
        if (returnedVal) return returnedVal;

        // console.log(`branch ${option} of ${optionsForElement} at : [${[row, col]}] failed`)

      }
    }

    return false;
  }

  iterativeFill(orig_grid) {
    let grid = this.cloneDeep(orig_grid)

    let i = 0
    let j = 0
    
    while ( i >= 0 && i < 9) {
      
      this.iterations++;

      if (this.iterations > this.maxIterations) {
        console.table(grid);
        console.log(`Max iterations hit: ${this.iterations}`)
        return null
        // throw new Error('Unsolvable. Iteration limit hit.');
      }
      
      if (orig_grid[i][j] !== "") {
        [i, j] = this.nextCoordinate(i, j);
      }
      
      if (grid[i][j] === "") {
        grid[i][j] = 1;
      }

      if (grid[i][j] > 9) {
        grid[i][j] = "";
        [i, j] = this.prevCoordinate(i, j)
        while (i >= 0 && orig_grid[i][j] !== "") {
          [i, j] = this.prevCoordinate(i, j);
        }
        if (i<0) { // unsolvable
          console.table(grid);
          console.log(`Unsolvable. Iterations: ${this.iterations}`)
          return null
        } 
        grid[i][j]++;
      }


      if (constraints_met.grid(grid) && grid[i][j] <= 9) {
        [i, j] = this.nextCoordinate(i, j);
        while (i < 9 && orig_grid[i][j] !== "") {
          [i, j] = this.nextCoordinate(i, j);
        }
      } else {
        grid[i][j]++;
      }
    }

    console.log(`Iterations for solution: ${this.iterations}`)
    return grid;
  }

  
  nextCoordinate(row, col) {
    if (col < 8) {
      col++;
    } else {
      row++;
      col = 0;
    }
    return [row, col];
  }

  prevCoordinate(row, col) {
    if (col > 0) {
      col--;
    } else {
      row--;
      col = 8;
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