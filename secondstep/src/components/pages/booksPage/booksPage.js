/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import './booksPage.css';

export default class BooksPage extends Component {
  gotService = new GotService();

  state = {
    selectedItem: '1',
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage/>;
    }

    const itemList = (
      <ItemList onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => {
          return name;
        }}/>
    );

    const itemDetails = (
      <ItemDetails
        getData={this.gotService.getBook}
        itemId={this.state.selectedItem}>
        <Field field='name' label='Name'/>
        <Field field='numberOfPages' label='Number of pages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    );
  }
};
