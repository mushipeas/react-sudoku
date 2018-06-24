import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import RightBox from './components/RightBox';
import CalculateOptions from './components/CalculateOptions';

class App extends Component {

  constructor() {
    super();
    this.newGrid = this.newGrid.bind(this);
    this.updateGrid = this.updateGrid.bind(this);
    this.calcOptions = this.calcOptions.bind(this);
    //get initial state
    this.state = {
      grid: new Array(9).fill("").map(() => new Array(9).fill("").map(() => "")),
      gridOptions : {}
    };
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
            newGrid={this.newGrid}
            updateGrid={this.updateGrid}
            calcOptions={this.calcOptions}
          />
          <RightBox/>
        </div>
      </div>
    );
  }
}

export default App;
