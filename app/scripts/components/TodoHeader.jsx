import React from 'react';


var TodoHeader = React.createClass({

  propTypes: {
    todosNumber: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <header className="header">
        <h1>Simple Todo app (React - Redux)</h1>
        <h3>To-Do ({this.props.todosNumber})</h3>
      </header>
    );
  }

});

export default TodoHeader;