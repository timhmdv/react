/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import './characterPage.css';

export default class CharacterPage extends Component {
  gotService = new GotService();

  state = {
    selectedItem: '130',
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
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => {
          return `${name} ${gender}`;
        }}/>
    );

    const itemDetails = (
      <ItemDetails
        getData={this.gotService.getCharacter}
        itemId={this.state.selectedItem}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    );
  }
};
