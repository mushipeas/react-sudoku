import React, { Component } from 'react';

class RightBox extends Component {
  render() {
    return (
      <div className="rightBox">
        <div className="grid-choices">
          <p>Scenarios:
            <button onClick={() => this.props.emptyGrid()}>Empty Grid</button>
            <button onClick={() => this.props.newGrid()}>New Grid 1</button>
            <button onClick={() => this.props.newGrid2()}>New Grid 2</button>
            <button onClick={() => this.props.newGrid3()}>New Grid 3</button>
          </p>
        </div>
        <p>Console Commands:
          <button onClick={() => this.props.calcOptions()}>Calculate Options</button>
          <button onClick={() => this.props.calcUniqueOptions()}>Calculate Unique Options</button>
        </p>
        <div className="sol-1-buttons">
          <p>Method 1:
            <button onClick={() => this.props.solveSol1()}>x1</button>
            <button onClick={() => this.props.solveSol1(5)}>x5</button>
            <button onClick={() => this.props.solveSol1(10)}>x10</button>
          </p>
        </div>
        <div className="sol-2-buttons">
          <p>Method 2:
            <button onClick={() => this.props.solveSol2()}>x1</button>
            <button onClick={() => this.props.solveSol2(5)}>x5</button>
            <button onClick={() => this.props.solveSol2(10)}>x10</button>
          </p>
        </div>
        <div className="full-sol-button">
          <button onClick={() => this.props.attemptFullSolve(10)}>Attempt Full Solve</button>
        </div>
        <div className="check-sol-button">
          <button onClick={() => this.props.checkSolution()}>Check Solution</button>
        </div>
      </div >
    )
  }
}

export default RightBox;
