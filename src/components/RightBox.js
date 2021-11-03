import React, { Component } from 'react';

class RightBox extends Component {
  render() {
    return (
      <div className="rightBox">
        <p>Console Commands:
          <button onClick={() => this.props.calcOptions()}>Calculate Options</button>
          <button onClick={() => this.props.calcUniqueOptions()}>Calculate Unique Options</button>
        </p>
        <div>Iterative Solver:
          <div className="brute-sol-button">
            <button onClick={() => this.props.bruteSolve()}>Solve!</button>
          </div>
        </div>
      </div >
    )
  }
}

export default RightBox;
