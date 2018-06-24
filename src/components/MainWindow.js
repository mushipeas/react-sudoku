import React, { Component } from 'react';
//import SudokuGrid from './SudokuGrid';
import SudokuGrid2 from './SudokuGrid2';

class MainWindow extends Component {
  render() {
    return (
      <div className="window">
        <SudokuGrid2
          grid={this.props.grid}
          newGrid={this.props.newGrid}
          updateGrid={this.props.updateGrid}
        />
        <div className="grid-choices">
        <button onClick={() => this.props.emptyGrid()}>Empty Grid</button>
        <button onClick={() => this.props.newGrid()}>New Grid 1</button>
        <button onClick={() => this.props.newGrid2()}>New Grid 2</button>
        <button onClick={() => this.props.newGrid3()}>New Grid 3</button>
        </div>
        <button onClick={() => this.props.calcOptions()}>Calculate Options</button>
        <button onClick={() => this.props.calcUniqueOptions()}>Calculate Unique Options</button>
        <div className="sol-1-buttons">
          <button onClick={() => this.props.solveSol1()}>Solve1 (1)</button>
          <button onClick={() => this.props.solveSol1(5)}>Solve1 (5)</button>
          <button onClick={() => this.props.solveSol1(10)}>Solve1 (10)</button>
        </div>
        <div className="sol-2-buttons">
          <button onClick={() => this.props.solveSol2()}>Solve2 (1)</button>
          <button onClick={() => this.props.solveSol2(5)}>Solve2 (5)</button>
          <button onClick={() => this.props.solveSol2(10)}>Solve2 (10)</button>
        </div>
        <div className="full-sol-button">
          <button onClick={() => this.props.attemptFullSolve(10)}>Attempt Full Solve</button>
        </div>
      </div>
    )
  }
}

export default MainWindow;
