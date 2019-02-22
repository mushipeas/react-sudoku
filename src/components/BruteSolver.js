import CalculateOptions from './CalculateOptions';

class BruteSolve {
  
  solve(grid) {
    let possibleOptions = CalculateOptions(grid);
    
  }


  // update grid //copied from solver.js. Needs consolidation later.
  updateGrid(grid, updates) {
      for (let itemIndex in updates) {
        let rowIndex = Math.floor(itemIndex/9);
        let colIndex = itemIndex-rowIndex*9;
        console.log(`Changing ${rowIndex}:${colIndex},(${itemIndex})   :  ${updates[itemIndex]}`)
        grid[rowIndex][colIndex] = updates[itemIndex];
      }
      return grid;
    }
}

export default BruteSolve