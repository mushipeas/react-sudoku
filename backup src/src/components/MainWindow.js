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
      <button onClick={() => this.props.calcOptions()}>Calculate Options</button>
      </div>
    )
  }
}

export default MainWindow;
