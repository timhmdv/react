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
    return arr.map((character, index) => {
      return (
        <li
          key={index}
          className="list-group-item"
          onClick={() => this.props.onCharacterSelected(41 + index)}>
          {character.name}
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
  onCharacterSelected: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
};
