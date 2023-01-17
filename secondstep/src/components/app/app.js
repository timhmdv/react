/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import './app.css';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    showRandomCharacter: true,
  };

  toggleRandomCharacter = () => {
    this.setState({
      showRandomCharacter: !this.state.showRandomCharacter,
    });
  };

  render() {
    const {showRandomCharacter} = this.state;

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
              <ItemList />
            </Col>
            <Col md='6'>
              <CharDetails />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
