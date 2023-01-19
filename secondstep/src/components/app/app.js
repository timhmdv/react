/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import './app.css';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showRandomCharacter: true,
    selectedCharacter: 130,
    error: false,
  };

  componentDidCatch() {
    console.log('error');
    this.setState({
      error: true,
    });
  }

  toggleRandomCharacter = () => {
    this.setState({
      showRandomCharacter: !this.state.showRandomCharacter,
    });
  };

  onCharacterSelected = (id) => {
    this.setState({
      selectedCharacter: id,
    });
  };

  render() {
    const {showRandomCharacter} = this.state;

    if (this.state.error) {
      return <ErrorMessage/>;
    }

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{size: 5, offset: 0}}>
              {showRandomCharacter ? <RandomChar/> : null}
              <button className='button' onClick={this.toggleRandomCharacter}>
                Toggle random character
              </button>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <ItemList onCharacterSelected={this.onCharacterSelected}/>
            </Col>
            <Col md='6'>
              <CharDetails characterId={this.state.selectedCharacter}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
