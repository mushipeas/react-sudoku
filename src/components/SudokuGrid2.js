import React, { Component } from 'react';


class SudokuGrid extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.value);
    const vert = Math.ceil(e.target.name/9-1);
    const horiz = e.target.name-vert*9-1;

    let validChar = /^$|[1-9]/
    if(validChar.test(e.target.value)) {
      this.props.updateGrid(vert, horiz, e.target.value);
    };
  }

  componentWillMount() {
    this.props.newGrid();
  }

  render() {
    const { grid } = this.props;

    return (
      <div className="sudokuBoxContainer">
        <div className="sudokuBox">
          <div className="row" key="row-1">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='01' key="col-1" value={grid[0][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='02' key="col-2" value={grid[0][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='03' key="col-3" value={grid[0][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='04' key="col-4" value={grid[0][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='05' key="col-5" value={grid[0][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='06' key="col-6" value={grid[0][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='07' key="col-7" value={grid[0][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='08' key="col-8" value={grid[0][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='09' key="col-9" value={grid[0][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-2">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='10' key="col-1" value={grid[1][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='11' key="col-2" value={grid[1][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='12' key="col-3" value={grid[1][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='13' key="col-4" value={grid[1][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='14' key="col-5" value={grid[1][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='15' key="col-6" value={grid[1][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='16' key="col-7" value={grid[1][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='17' key="col-8" value={grid[1][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='18' key="col-9" value={grid[1][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-3">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='19' key="col-1" value={grid[2][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='20' key="col-2" value={grid[2][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='21' key="col-3" value={grid[2][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='22' key="col-4" value={grid[2][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='23' key="col-5" value={grid[2][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='24' key="col-6" value={grid[2][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='25' key="col-7" value={grid[2][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='26' key="col-8" value={grid[2][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='27' key="col-9" value={grid[2][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-4">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='28' key="col-1" value={grid[3][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='29' key="col-2" value={grid[3][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='30' key="col-3" value={grid[3][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='31' key="col-4" value={grid[3][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='32' key="col-5" value={grid[3][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='33' key="col-6" value={grid[3][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='34' key="col-7" value={grid[3][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='35' key="col-8" value={grid[3][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='36' key="col-9" value={grid[3][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-5">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='37' key="col-1" value={grid[4][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='38' key="col-2" value={grid[4][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='39' key="col-3" value={grid[4][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='40' key="col-4" value={grid[4][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='41' key="col-5" value={grid[4][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='42' key="col-6" value={grid[4][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='43' key="col-7" value={grid[4][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='44' key="col-8" value={grid[4][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='45' key="col-9" value={grid[4][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-6">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='46' key="col-1" value={grid[5][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='47' key="col-2" value={grid[5][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='48' key="col-3" value={grid[5][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='49' key="col-4" value={grid[5][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='50' key="col-5" value={grid[5][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='51' key="col-6" value={grid[5][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='52' key="col-7" value={grid[5][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='53' key="col-8" value={grid[5][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='54' key="col-9" value={grid[5][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-7">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='55' key="col-1" value={grid[6][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='56' key="col-2" value={grid[6][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='57' key="col-3" value={grid[6][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='58' key="col-4" value={grid[6][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='59' key="col-5" value={grid[6][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='60' key="col-6" value={grid[6][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='61' key="col-7" value={grid[6][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='62' key="col-8" value={grid[6][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='63' key="col-9" value={grid[6][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-8">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='64' key="col-1" value={grid[7][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='65' key="col-2" value={grid[7][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='66' key="col-3" value={grid[7][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='67' key="col-4" value={grid[7][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='68' key="col-5" value={grid[7][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='69' key="col-6" value={grid[7][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='70' key="col-7" value={grid[7][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='71' key="col-8" value={grid[7][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='72' key="col-9" value={grid[7][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <div className="row" key="row-9">
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='73' key="col-1" value={grid[8][0]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='74' key="col-2" value={grid[8][1]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='75' key="col-3" value={grid[8][2]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='76' key="col-4" value={grid[8][3]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='77' key="col-5" value={grid[8][4]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='78' key="col-6" value={grid[8][5]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='79' key="col-7" value={grid[8][6]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='80' key="col-8" value={grid[8][7]} onChange={(e) => this.handleChange(e)}></textarea>
            <textarea className="box" maxLength="1" onClick={(e) => e.target.select()} name='81' key="col-9" value={grid[8][8]} onChange={(e) => this.handleChange(e)}></textarea>
          </div>
        </div>
      </div>
    )
  }
}

export default SudokuGrid;

// div>div.hor-$*9>div.vert-$*9
// div>div.hor-$[key='row']*9>div.vert-${$$}*9
// div>div.hor-$[key='row']*9>div.vert-$[key='box']{$$}*9
// div>div.row[key='hor-$']*9>div.box[key='vert-$']{$$}*9
// div.sudokuBox>div.row[key='hor-$']*9>div.box[key='vert-$']{$$}*9
// div.sudokuBoxContainer>div.sudokuBox>div.row[key='hor-$']*9>div.box[key='vert-$']{$$}*9
// div.sudokuBoxContainer>div.sudokuBox>div.row[key='row-$']*9>textarea.box[key='col-$' value={grid[$][$]}]*9

// use : maxLength="1" to limit textarea length. use https://stackoverflow.com/questions/22571923/how-to-limit-the-textarea-to-only-hold-numbers
// to limit textarea to numbers

// implement onChange functionality to textareas
