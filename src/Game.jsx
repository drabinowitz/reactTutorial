var React = require('react');

var Row = require('./Row.jsx');

var _ = require('underscore');

var colSize = 3;

var rowSize = 3;

var turn = 'X';

var findConflict = function(arr){
  var countX = 0;
  var countO = 0;
  _.each(arr,function(val){
    if(val ==='X')++countX;
    if(val ==='O')++countO;
  });
  if (countX === 3){
    alert('X');
    location.reload();
  }
  if (countO === 3){
    alert('O');
    location.reload();
  }
  return false;
};

var checkForWinner = function(matrix){

  _(matrix).each(function(row){
    findConflict(row);
  });

  for (var i = 0; i < rowSize; i++){
    findConflict(_(matrix).pluck(i));
  }

  findConflict(_(matrix).reduce(function(arr,row,colIndex){

    arr.push(row[colIndex]);

    return arr;

  },[]));

  findConflict(_(matrix).reduce(function(arr,row,colIndex){

    arr.push(row[row.length - 1 - colIndex]);

    return arr;

  },[]));

};

var Game = React.createClass({

  getInitialState: function(){
    var obj = {};
    for (var i = 0; i < colSize; i++){
      obj[i] = [];
      for (var j = 0; j < rowSize; j++){
        obj[i].push('-');
      }
    }
    return obj;
  },

  handleClick: function(row,box){
    var obj = {};
    obj[row.props.index] = this.state[row.props.index];
    if (box.props.content === '-'){
      obj[row.props.index][box.props.index] = turn;
      turn  === 'X' ? turn = 'O' : turn  = 'X';
    }
    this.setState(obj);
    checkForWinner(this.state);
  },

  render: function(){
    var rows = [];
    for (var i = 0; i < colSize; i++){
      rows.push (<Row index = {i} content = {this.state[i]} handleClick = {this.handleClick}/>);
    }

    return (
      <div className="game">
        {rows}
      </div>
    );
  }

});

module.exports = Game;
