/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './itemList.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

export default class ItemList extends Component {
  GotService = new GotService();

  state = {
    itemsList: null,
  };

  componentDidMount() {
    const {getData} = this.props;

    getData()
        .then((itemsList) => {
          this.setState({
            itemsList,
          });
        });
  };

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  };

  render() {
    const {itemsList} = this.state;

    if (!itemsList) {
      return <Spinner/>;
    }

    const characters = this.renderItems(itemsList);

    return (
      <ul className="item-list list-group">
        {characters}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
};
