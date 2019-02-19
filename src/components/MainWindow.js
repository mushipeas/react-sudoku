import React, { Component } from 'react';
import SudokuGrid from './SudokuGrid';

class MainWindow extends Component {
  render() {
    return (
      <div className="window">
        <SudokuGrid
          grid={this.props.grid}
          solved={this.props.solved}
          newGrid={this.props.newGrid}
          updateGrid={this.props.updateGrid}
        />
      </div>
    )
  }
}

export default MainWindow;
