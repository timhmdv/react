/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import './app.css';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from '../../services/gotService';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  gotService = new GotService();

  state = {
    showRandomCharacter: true,
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  toggleRandomCharacter = () => {
    this.setState({
      showRandomCharacter: !this.state.showRandomCharacter,
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
          <CharacterPage/>
          <Row>
            <Col md='6'>
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllBooks}
                renderItem={(item) => {
                  return item.name;
                }}/>
            </Col>
            <Col md='6'>
              <ItemDetails itemId={this.state.selectedItem}/>
            </Col>
          </Row>
          <Row>
            <Col md='6'>
              <ItemList
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem={(item) => {
                  return item.name;
                }}/>
            </Col>
            <Col md='6'>
              <ItemDetails itemId={this.state.selectedItem}/>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
