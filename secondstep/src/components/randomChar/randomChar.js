/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './randomChar.css';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {
  constructor(props) {
    super(props);

    this.updateCharacter();
  }

  gotService = new GotService();

  state = {
    character: {},
    loading: true,
  };

  onCharLoaded = (character) => {
    this.setState({
      character,
      loading: false,
      error: false,
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updateCharacter() {
    const id = Math.floor(Math.random()*140 + 25);
    this.gotService.getCharacter(id)
        .then((character) => {
          this.onCharLoaded(character);
        })
        .catch(this.onError);
  }

  render() {
    const {character, loading, error} = this.state;

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View character={character}/> : null;

    return (
      <div className="random-block rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const View = ({character}) => {
  const {name, gender, born, died, culture} = character;

  return (
    <>
      <h4>Random Character: {name}</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Gender </span>
          <span>{gender}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Born </span>
          <span>{born}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Died </span>
          <span>{died}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span className="term">Culture </span>
          <span>{culture}</span>
        </li>
      </ul>
    </>
  );
};

View.propTypes = {
  character: PropTypes.object,
  name: PropTypes.string,
  gender: PropTypes.string,
  born: PropTypes.string,
  died: PropTypes.string,
  culture: PropTypes.string,
};

