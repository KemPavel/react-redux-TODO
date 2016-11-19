import React from 'react';


var TodoFooter = React.createClass({

  propTypes: {
    activeTab: React.PropTypes.string.isRequired,
    showAll: React.PropTypes.func.isRequired,
    showActive: React.PropTypes.func.isRequired,
    showCompleted: React.PropTypes.func.isRequired,
    deleteCompleted: React.PropTypes.func.isRequired
  },

  componentDidUpdate() {
    for (let key in this.refs) {
      this.refs[key].classList.remove('footer__button--active');
      if (key === this.props.activeTab) {
        this.refs[key].classList.add('footer__button--active');
      }
    }
  },

  handleShowAllClick() {
    this.props.showAll();
  },

  handleShowActiveClick() {
    this.props.showActive();
  },

  handleShowCompletedClick() {
    this.props.showCompleted();
  },

  handleDeleteCompletedClick() {
    this.props.deleteCompleted();
  },

  render() {
    return(
      <footer className="footer">
        <button ref="all" className="footer__button footer__button--active" onClick={this.handleShowAllClick}>All</button>
        <button ref="active" className="footer__button" onClick={this.handleShowActiveClick}>Active</button>
        <button ref="completed" className="footer__button" onClick={this.handleShowCompletedClick}>Completed</button>
        <button className="footer__button footer__button--delete-completed" onClick={this.handleDeleteCompletedClick}>Delete completed</button>
      </footer>
    );
  }

});

export default TodoFooter;