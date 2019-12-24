import React, { Component } from 'react';

class RightBox extends Component {
  render() {
    return (
      <div className="rightBox">
        <p>Console Commands:
          <button onClick={() => this.props.calcOptions()}>Calculate Options</button>
          <button onClick={() => this.props.calcUniqueOptions()}>Calculate Unique Options</button>
        </p>
        <div>Depreciated Solution Methods
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
            <button onClick={() => this.props.attemptFullSolve(10)}>Attempt Full Solve (M1+2)</button>
          </div>
          <p>..............................
          </p>
        </div>
        <div>Iterative Solver:
          <div className="brute-sol-button">
            <p>TRY:</p>
            <button onClick={() => this.props.bruteSolve()}>Brute Solve</button>
          </div>
        </div>
      </div >
    )
  }
}

export default RightBox;
