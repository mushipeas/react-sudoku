import React, { Component } from 'react';
import SudokuGrid from './SudokuGrid';

class MainWindow extends Component {
  render() {
    let checkSolutionMessage;
    if (this.props.solved) {
      checkSolutionMessage = <p>Solution is Correct!</p>;
    } else if (this.props.solved === false) {
      checkSolutionMessage = <p>That's not a valid solution! :(</p>;
    }

    return (
      <div className="window">
        <SudokuGrid
          grid={this.props.grid}
          solved={this.props.solved}
          newGrid={this.props.newGrid}
          updateGrid={this.props.updateGrid}
        />
        <div className="grid-choices">
          <p>Scenarios:
        <button onClick={() => this.props.newGrid()}>Empty Grid</button>
            <button onClick={() => this.props.newGrid('grid_01')}>New Grid 01</button>
            <button onClick={() => this.props.newGrid('grid_02')}>New Grid 02</button>
            <button onClick={() => this.props.newGrid('grid_03')}>New Grid 03</button>
          </p>
        </div>
        <div className="check-sol-button">
          <button onClick={() => this.props.checkSolution()}>Check Solution</button>
          {checkSolutionMessage}
        </div>
      </div>
    );
  }
}


export default MainWindow;
