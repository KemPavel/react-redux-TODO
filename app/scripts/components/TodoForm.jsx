import React from 'react';


var TodoForm = React.createClass({

  propTypes: {
    addTodo: React.PropTypes.func.isRequired
  },

  handleAddTodoClick() {
    if (this.refs.input.value.replace(/\s+/g, '').length !== 0) {
      this.props.addTodo(this.refs.input.value);
      this.refs.input.value = '';/**/
    }
    this.refs.input.focus();
  },

  handleEnterClick(e) {
    if (e.key === 'Enter') {
      this.handleAddTodoClick()
    }
  },

  componentDidMount() {
    this.refs.input.focus();
  },

  render() {
    return (
      <div className="form">
        <input className="form__input" ref="input" maxLength="50" placeholder="Add todo" onKeyUp={this.handleEnterClick} />
        <button className="form__button" onClick={this.handleAddTodoClick}>╋</button>
      </div>
    );
  }

});

export default TodoForm;