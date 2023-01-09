import React, {Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
export default class PostStatusFilter extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'Все'},
      {name: 'like', label: 'Понравилось'},
    ];
  }
  // eslint-disable-next-line require-jsdoc
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const btnClass = active ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          key={name}
          type='button'
          className={`btn ${btnClass}`}
          onClick={() => onFilterSelect(name)}>
          {label}
        </button>
      );
    });
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    );
  }
};

PostStatusFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSelect: PropTypes.func.isRequired,
};
