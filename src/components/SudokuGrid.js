import React, { Component } from 'react';


class SudokuGrid extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  //updates grid when user inputs value
  handleChange(e, row, col) {
    e.preventDefault();
    console.log(e.target.value);
    const vert = row;
    const horiz = col;

    let validChar = /^$|[1-9]/
    if (validChar.test(e.target.value)) {
      this.props.updateGrid(vert, horiz, e.target.value);
    };
  }

  componentWillMount() {
    this.props.newGrid();
  }

  clickHandler(e) {
    e.target.select();
  }

  col(row, grid) {
    return [...Array(9).keys()].map((col) => (
      <textarea className="box" maxLength="1" onClick={this.clickHandler} key={`col-${col + 1}`} value={grid[row][col]} onChange={(e) => this.handleChange(e, row, col)} style={{ color: this.props.solved ? "Green" : "" }}></textarea>
    ))
  }

  render() {
    const { grid } = this.props;

    return (
      <div className="sudokuBoxContainer">
        <div className="sudokuBox">
          {[...Array(9).keys()].map((row) => (
            <div className="row" key={`row-${row + 1}`}>
              {this.col(row, grid)}
            </div>
          ))
          }
        </div>
      </div>
    )
  }
}

export default SudokuGrid;