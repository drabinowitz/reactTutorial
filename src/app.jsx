'use strict';

window.React = require('react');

window.Box = React.createClass({

  getInitialState: function(){
    return {content: '-'};
  },

  handleClick: function(){
    if (this.state.content !== 'X'){
      this.setState({content:'X'});
    } else {
      this.setState({content:'O'});
    }
  },

  render: function(){

    return (
      <button className="box" onClick={this.handleClick}>
        {this.state.content}
      </button>
    );

  }

});

window.Row = React.createClass({

  render: function(){
    return (
      <div className="row">
        <Box key="0"/>
        <Box key="1"/>
        <Box key="2"/>
      </div>
    );
  }

});
