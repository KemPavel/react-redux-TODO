import React from 'react';


var TodoHeader = React.createClass({

  propTypes: {
    todosAmount: React.PropTypes.number.isRequired
  },

  render() {
    return (
      <header className="header">
        <h1>Simple Todo app (React only)</h1>
        <h3>To-Do ({this.props.todosAmount})</h3>
      </header>
    );
  }

});

export default TodoHeader;