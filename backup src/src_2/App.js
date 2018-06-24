import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import RightBox from './components/RightBox';
import CalculateOptions from './components/CalculateOptions';
import CalculateUniqueOptions from './components/CalculateUniqueOptions';
import {iterateSolution1, iterateSolution2, rowify} from './components/Solver';

class App extends Component {

  constructor() {
    super();
    this.emptyGrid = this.emptyGrid.bind(this);
    this.newGrid = this.newGrid.bind(this);
    this.newGrid2 = this.newGrid2.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.calcOptions = this.calcOptions.bind(this);
    this.calcUniqueOptions = this.calcUniqueOptions.bind(this);
    this.solveSol1 = this.solveSol1.bind(this);
    this.solveSol2 = this.solveSol2.bind(this);
    this.attemptFullSolve = this.attemptFullSolve.bind(this);
    //get initial state
    this.state = {
      grid: new Array(9).fill("").map(() => new Array(9).fill("").map(() => "")),
      gridOptions : {},
      uniqueOptions : {}
    };
  }

  emptyGrid() {
    //
    const grid = {
      0:["", "", "", "", "", "", "", "", ""],
      1:["", "", "", "", "", "", "", "", ""],
      2:["", "", "", "", "", "", "", "", ""],
      3:["", "", "", "", "", "", "", "", ""],
      4:["", "", "", "", "", "", "", "", ""],
      5:["", "", "", "", "", "", "", "", ""],
      6:["", "", "", "", "", "", "", "", ""],
      7:["", "", "", "", "", "", "", "", ""],
      8:["", "", "", "", "", "", "", "", ""]
    }

    this.setState({ grid })
  }

  // creates a 9x9 grid and populates it with data from ??
  newGrid() {
    // 9x9 grid with zeros
    const grid = {
      0:[2, "", 9, "", 8, "", 5, "", ""],
      1:["", "", 4, 7, 6, 9, "", "", ""],
      2:[3, "", "", "", 1, 2, "", 4, ""],
      3:["", "", 3, 6, "", "", "", 5, 4],
      4:["", 4, "", "", "", "", "", 8, ""],
      5:[8, 5, "", "", "", 7, 6, "", ""],
      6:["", 2, "", 8, 7, "", "", "", 9],
      7:["", "", "", 1, 9, 6, 2, "", ""],
      8:["", "", 5, "", 4, "", 1, "", 8]
    }

    this.setState({ grid })
  }

  newGrid2() {
    //
    const grid = {
      0:["", "", "", 6, 7, "", "", 4, ""],
      1:[1, "", "", "", "", "", "", 3, 6],
      2:["", 4, 2, 1, "", "", "", "", ""],
      3:[4, "", "", 7, "", "", "", "", ""],
      4:["", "", 5, "", "", "", 3, "", ""],
      5:["", "", "", "", "", 2, "", "", 8],
      6:["", "", "", "", "", 1, 6, 7, ""],
      7:[5, 8, "", "", "", "", "", "", 3],
      8:["", 3, "", "", 2, 9, "", "", ""]
    }

    this.setState({ grid })
  }

  updateGrid(vert, horiz, value) {
    const grid = {...this.state.grid};
    if (value === "") grid[vert][horiz] = value;
    else grid[vert][horiz] = 1*value;

    this.setState({ grid })
  }

  calcOptions() {
    const gridOptions = CalculateOptions(this.state.grid);
    this.setState({ gridOptions });
    console.table(gridOptions);
  }

  calcUniqueOptions() {
    const gridOptions = CalculateOptions(this.state.grid);
    const uniqueOptions = CalculateUniqueOptions(rowify(gridOptions));
    this.setState({ uniqueOptions });
    console.table(uniqueOptions);
  }

  solveSol1(iterations) {
    const { grid } = iterateSolution1(this.state.grid, iterations);
    //console.log(iterLeft);
    this.setState({ grid });
  }

  solveSol2(iterations) {
    const { grid } = iterateSolution2(this.state.grid, iterations);
    this.setState({ grid });
  }

  attemptFullSolve(iterations) {
    for(let i = 0; i<iterations; i++) {
      this.solveSol1(10)
      this.solveSol2(10)
      //check if grid is solved and break;
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header/>
        <div className="body">
          <MainWindow
            grid={this.state.grid}
            emptyGrid={this.emptyGrid}
            newGrid={this.newGrid}
            newGrid2={this.newGrid2}
            updateGrid={this.updateGrid}
            calcOptions={this.calcOptions}
            calcUniqueOptions={this.calcUniqueOptions}
            solveSol1={this.solveSol1}
            solveSol2={this.solveSol2}
            attemptFullSolve={this.attemptFullSolve}
          />
          <RightBox/>
        </div>
      </div>
    );
  }
}

export default App;
