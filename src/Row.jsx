
var React = require('react');

var Box = require('./Box.jsx');

var Row = React.createClass({

/*  getInitialState: function(){
    var obj = {};
    for (var i = 0; i < this.props.content.length; i++){
      obj[i] = this.props.content[i]
    }
    return obj;
  },*/

  handleClick: function(box){
    this.props.handleClick(this,box);
  },

  render: function(){
    var boxes = [];
    for (var i = 0; i < this.props.content.length; i++){
      boxes.push (<Box index = {i} content = {this.props.content[i]} handleClick = {this.handleClick}/>);
    }

    return (
      <div className="row">
        {boxes}
      </div>
    );
  }

});

module.exports = Row;
