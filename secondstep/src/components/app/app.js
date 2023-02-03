/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Routes, Route}
  from 'react-router-dom';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharactersPage, HousesPage, BooksPage, BooksItemWithParams}
  from '../pages';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import './app.css';


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
              {showRandomCharacter ?
                <RandomChar getData={this.gotService.getCharacter}/> : null}
              <button className='button' onClick={this.toggleRandomCharacter}>
                Toggle random character
              </button>
            </Col>
          </Row>
          <Routes>
            <Route path='/characters' element={<CharactersPage/>}/>
            <Route path='/houses' element={<HousesPage/>}/>
            <Route path='/books' element={<BooksPage/>}/>
            <Route path='/books/:id' element={<BooksItemWithParams/>}/>
          </Routes>
        </Container>
      </>
    );
  }
};
