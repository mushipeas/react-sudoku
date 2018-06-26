React-Sudoku

Sodoku solver and (eventually) generator created with Javascript + React.
Currently packaged with Create-React-App.

[View on GitHub Pages](https://mushipeas.github.io/react-sudoku/)

The solver currently iterates over 2 methods to fill out the unsolved scenario. A third method needs implementing to complete the hardest (non-guess based) sudoku puzzles.
A fourth, brute-force method would also be useful to solve scenarios that require guessing.

Once the solver is complete, it can be used as a tester for generating new puzzles of specified difficulty.

Method 1: (Singles)
Iterates over all squares for any that only have 1 candidate. Updates the grid with all such values found per run.

Method 2: (Hidden Singles)
Iterates over all squares, checking all of its related squares to see if the selected square has any unique candidates in any of its 3 (row, col, sector) groups. Updates the grid with all such values found per run.

Method 3: (Naked/Hidden Pairs/Trips/Quads)
Iterates over all squares, checking all of its related squares to see which candidates must be in other squares in its 3 groups, removing those candidates and seeing if this leads to any singles.

The code also contains 3 example scenarios used for testing. Currently 1 and 3 are solvable using Methods 1 and 2. Testcase 2 may be solvable once Method 3 is implemented.