import React from 'react';
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../constants/visibilityFiltersTypes';

var TodoFooter = React.createClass({

  propTypes: {
    filter: React.PropTypes.string.isRequired,
    setVisibilityFilter: React.PropTypes.func.isRequired,
    deleteCompleted: React.PropTypes.func.isRequired
  },

  handleSetVisibilityFilter(filter) {
    this.props.setVisibilityFilter(filter);
  },

  handleDeleteCompletedClick() {
    this.props.deleteCompleted();
  },

  renderButton(filter, name) {
    if (filter === this.props.filter) {
      return <button className="footer__button footer__button--active">{name}</button>;
    } else {
      return <button className="footer__button" onClick={this.handleSetVisibilityFilter.bind(this, filter)}>{name}</button>;
    }
  },

  render() {
    return(
      <footer className="footer">
        {this.renderButton(SHOW_ALL, 'All')}
        {this.renderButton(SHOW_ACTIVE, 'Active')}
        {this.renderButton(SHOW_COMPLETED, 'Completed')}
        <button className="footer__button footer__button--delete-completed" onClick={this.handleDeleteCompletedClick}>Delete completed</button>
      </footer>
    );
  }

});

export default TodoFooter;