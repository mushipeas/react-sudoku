# React-Sudoku

## About:
Sodoku solver and (eventually) generator created with Javascript + React.
There are 3 test grids, all of which can be solved by the iterative solver.

Currently packaged with Create-React-App.

[View on GitHub Pages](https://mushipeas.github.io/react-sudoku/)

## Methods:

### CURRENT: Iterative Solver
The iterative solver (now implemented) iteratively fills the grid, checking against `27 constraints`, with backtracking when the constraints are not met:

- No duplicate numbers in any row or column (18)
- No duplicate numbers in any 3x3 region (9)

The constraints-check only checks the current row, column and square `[3 constraints]` of the changed element per iteration, instead of all 27 stated above.

The long-term plan is to use the iterations-to-solve (seen in the console) to gauge puzzle difficulty. This could be used as part of the puzzle generator to validate output.

Currently: `max_iterations = 100000`

The iterative solver will solve any solvable grid. However, it might be interesting to implement the `CalculateOptions()` helper into it to reduce the number of iterations. That said, it would not add any real functional improvement.

### DEPRECIATED: Recursive Solver
This was recursively filling the grid using `CalculateOptions()` as a helper to reduce the candidates per square in the grid. This worked for Testcase 1 and 3.

Despite the reduced branches due to the helper, attempting to solve Testcase 2 would lead to a stack overflow. Tail-call optimisation may have solved this, but the iterative solution appears to be far more functional.

The helper function is still pretty useful, and might be good to integrate into the iterative solver, with some modifications.

### DEPRECIATED: 'Smart' Solver
This solver currently iterates over 2 methods to fill out the unsolved scenario. A third method needs implementing to complete the hardest (non-guess based) sudoku puzzles.

    Method 1: (Singles)
        Iterates over all squares for any that only have 1 candidate (a single). Updates the grid with all such values found per run.

    Method 2: (Hidden Singles)
        Iterates over all squares, checking all of its related squares to see if the selected square has any unique candidates in any of its 3 (row, col, sector) groups. Updates the grid with all such values found per run.