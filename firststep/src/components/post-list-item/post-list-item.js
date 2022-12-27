import React, {Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
export default class PostListItem extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  };

  // eslint-disable-next-line require-jsdoc
  onImportant() {
    this.setState(({important}) => ({
      important: !important,
    }));
  };
  // eslint-disable-next-line require-jsdoc
  onLike() {
    this.setState(({like}) => ({
      like: !like,
    }));
  };
  // eslint-disable-next-line require-jsdoc
  render() {
    const {label} = this.props;
    const {important, like} = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) {
      classNames += ' important';
    };
    if (like) {
      classNames += ' like';
    };
    return (
      <div className={classNames}>
        <span className='app-list-item-label' onClick={this.onLike}>
          {label}
        </span>
        <div className='d-flex justify-content-center align-items-center'>
          <button type='button' className='btn-star btn-sm'
            onClick={this.onImportant}>
            <i className='fas fa-star'></i>
          </button>
          <button type='button' className='btn-trash btn-sm'>
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
  important: PropTypes.bool,
};

