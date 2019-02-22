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
        <button onClick={() => this.props.emptyGrid()}>Empty Grid</button>
            <button onClick={() => this.props.newGrid()}>New Grid 1</button>
            <button onClick={() => this.props.newGrid2()}>New Grid 2</button>
            <button onClick={() => this.props.newGrid3()}>New Grid 3</button>
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
