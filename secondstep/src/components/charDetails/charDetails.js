/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './charDetails.css';
import GotService from '../../services/gotService';

export default class CharDetails extends Component {
  gotService = new GotService();

  state = {
    character: null,
  };

  componentDidMount() {
    this.updateCharacter();
  }

  componentDidUpdate(prevProps) {
    if (this.props.characterId !== prevProps.characterId) {
      this.updateCharacter();
    }
  }

  updateCharacter() {
    const {characterId} = this.props;
    if (!characterId) {
      return;
    }

    this.gotService.getCharacter(characterId)
        .then((character) => {
          this.setState({character});
        });
  };
  render() {
    if (!this.state.character) {
      return <span className='select-error'>Please select a character</span>;
    }

    const {gender, name, born, died, culture} = this.state.character;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}

CharDetails.propTypes = {
  characterId: PropTypes.number.isRequired,
};
