import React, { Component } from 'react';


class SudokuGrid extends Component {


  // creates a 9x9 grid and populates it with data from ??
  newGrid() {
    // 9x9 grid with zeros
    const testGrid = new Array(9).fill(0).map(() => new Array(9).fill(0).map(() => 0));
    // debug starting line
    const grid = testGrid;
  }

  // changes value in grid based on inputs. val must be 0-9.
  changeValue(val,vert,horz) {
    // this.props.grid[vert][horz] = val;
  }

  render() {

    // 9x9 grid with zeros
    const testGrid = new Array(9).fill(0).map(() => new Array(9).fill(0).map(() => ""));
    // debug starting line
    const grid = testGrid;

    grid[4][2] = 5;

    return (
      <div className="sudokuBoxContainer">
        <div className="sudokuBox">
          <div className="row" key="hor-1">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[0][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[0][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[0][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[0][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[0][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[0][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[0][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[0][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[0][8]}></textarea>
          </div>
          <div className="row" key="hor-2">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[1][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[1][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[1][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[1][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[1][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[1][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[1][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[1][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[1][8]}></textarea>
          </div>
          <div className="row" key="hor-3">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[2][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[2][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[2][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[2][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[2][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[2][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[2][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[2][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[2][8]}></textarea>
          </div>
          <div className="row" key="hor-4">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[3][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[3][1]}></textarea>
            <textarea className="box" type="vert-3'," value={grid[3][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[3][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[3][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[3][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[3][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[3][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[3][8]}></textarea>
          </div>
          <div className="row" key="hor-5">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[4][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[4][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[4][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[4][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[4][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[4][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[4][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[4][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[4][8]}></textarea>
          </div>
          <div className="row" key="hor-6">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[5][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[5][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[5][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[5][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[5][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[5][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[5][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[5][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[5][8]}></textarea>
          </div>
          <div className="row" key="hor-7">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[6][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[6][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[6][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[6][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[6][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[6][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[6][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[6][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[6][8]}></textarea>
          </div>
          <div className="row" key="hor-8">
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-1'," value={grid[7][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[7][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[7][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[7][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[7][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[7][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[7][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[7][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[7][8]}></textarea>
          </div>
          <div className="row" key="hor-9">
            <textarea name="" id="" cols="1" rows="1" className="box" type="vert-1'," value={grid[8][0]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-2'," value={grid[8][1]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-3'," value={grid[8][2]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-4'," value={grid[8][3]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-5'," value={grid[8][4]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-6'," value={grid[8][5]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-7'," value={grid[8][6]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-8'," value={grid[8][7]}></textarea>
            <textarea name="" id="" cols="30" rows="10" className="box" type="vert-9'," value={grid[8][8]}></textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default SudokuGrid;

// div>div.hor-$*9>div.vert-$*9
// div>div.hor-$[type='row']*9>div.vert-${$$}*9
// div>div.hor-$[type='row']*9>div.vert-$[type='box']{$$}*9
// div>div.row[key='hor-$']*9>div.box[type='vert-$']{$$}*9
// div.sudokuBox>div.row[key='hor-$']*9>div.box[type='vert-$']{$$}*9
// div.sudokuBoxContainer>div.sudokuBox>div.row[key='hor-$']*9>div.box[type='vert-$']{$$}*9

0
1
2
3
4
5
6
7
8

// use : maxlength="1" to limit textarea length. use https://stackoverflow.com/questions/22571923/how-to-limit-the-textarea-to-only-hold-numbers
// to limit input to numbers

// implement onChange functionality to textaresa
