import React, {Component} from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line require-jsdoc
export default class SearchPanel extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }

  // eslint-disable-next-line require-jsdoc
  onUpdateSearch(event) {
    const term = event.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <input className='form-control search-input'
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdateSearch}
      />
    );
  }
};

SearchPanel.propTypes = {
  onUpdateSearch: PropTypes.func.isRequired,
};
