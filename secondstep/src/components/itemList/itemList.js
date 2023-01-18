/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './itemList.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner';

export default class ItemList extends Component {
  GotService = new GotService();

  state = {
    charactersList: null,
  };

  componentDidMount() {
    this.GotService.getAllCharacters()
        .then((charactersList) => {
          this.setState({
            charactersList,
          });
        });
  };

  renderItems(arr) {
    return arr.map((character, index) => {
      return (
        <li
          key={index}
          className="list-group-item">
          {character.name}
        </li>
      );
    });
  };

  render() {
    const {charactersList} = this.state;

    if (!charactersList) {
      return <Spinner/>;
    }

    console.log(this.renderItems(charactersList));
    const characters = this.renderItems(charactersList);

    return (
      <ul className="item-list list-group">
        {characters}
      </ul>
    );
  }
}

ItemList.propTypes = {
  onCharacterSelected: PropTypes.func.isRequired,
};
