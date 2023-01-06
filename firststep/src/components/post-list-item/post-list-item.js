import React, {Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
export default class PostListItem extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    const {label, onDelete, onToggleImportant,
      onToggleLiked, important, like} = this.props;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    };
    if (like) {
      classNames += ' like';
    };
    return (
      <div className={classNames}>
        <span className='app-list-item-label' onClick={onToggleLiked}>
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-star btn-sm'
            onClick={onToggleImportant}>
            <i className='fas fa-star'></i>
          </button>
          <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-heart'></i>
        </div>
      </div>
    );
  }
}


PostListItem.propTypes = {
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  like: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onToggleLiked: PropTypes.func.isRequired,
};

