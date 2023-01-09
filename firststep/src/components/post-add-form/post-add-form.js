import React, {Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
export default class PostAddForm extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // eslint-disable-next-line require-jsdoc
  onValueChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  // eslint-disable-next-line require-jsdoc
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState({
      text: '',
    });
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <form
        className='bottom-panel d-flex'
        onSubmit={this.onSubmit}>
        <input
          type='text'
          placeholder='О чём Вы думаете сейчас?'
          className='form-control new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <button
          type='submit'
          className='btn btn-outline-secondary'>
        Добавить
        </button>
      </form>
    );
  }
}

PostAddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
