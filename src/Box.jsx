var React = require('react');

var Box = React.createClass({

  handleClick: function(){
    this.props.handleClick(this);
  },

  render: function(){
    return (
      <button className="box" onClick={this.handleClick}>
        {this.props.content}
      </button>
    );
  }

});

module.exports = Box;
