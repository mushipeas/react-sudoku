import React, { Component } from 'react';


class SudokuGrid extends Component {

  render() {
    return (
      <div className="sudokuBoxContainer">
        <div className="sudokuBox">
          <div className="row" key="row-1">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-2">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-3">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-4">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-5">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-6">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-7">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-8">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
          <div className="row" key="row-9">
            <div className="box" type="col-1">1</div>
            <div className="box" type="col-2">2</div>
            <div className="box" type="col-3">3</div>
            <div className="box" type="col-4">4</div>
            <div className="box" type="col-5">5</div>
            <div className="box" type="col-6">6</div>
            <div className="box" type="col-7">7</div>
            <div className="box" type="col-8">8</div>
            <div className="box" type="col-9">9</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SudokuGrid;

// div>div.row-$*9>div.col-$*9
// div>div.row-$[type='row']*9>div.col-${$$}*9
// div>div.row-$[type='row']*9>div.col-$[type='box']{$$}*9
// div>div.row[key='row-$']*9>div.box[type='col-$']{$$}*9
// div.sudokuBox>div.row[key='row-$']*9>div.box[type='col-$']{$$}*9
// div.sudokuBoxContainer>div.sudokuBox>div.row[key='row-$']*9>div.box[type='col-$']{$$}*9
