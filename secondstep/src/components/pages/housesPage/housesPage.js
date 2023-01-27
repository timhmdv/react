/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import RowBlock from '../../rowBlock';
import ItemList from '../../itemList';
import ItemDetails from '../../itemDetails';
import {Field} from '../../itemDetails';
import ErrorMessage from '../../errorMessage';
import GotService from '../../../services/gotService';
import './housesPage.css';

export default class HousesPage extends Component {
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
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => {
          return name;
        }}/>
    );

    const itemDetails = (
      <ItemDetails
        getData={this.gotService.getHouse}
        itemId={this.state.selectedItem}>
        <Field field='name' label='Name'/>
        <Field field='region' label='Region'/>
        <Field field='words' label='Words'/>
        <Field field='titles' label='Titles'/>
        <Field field='overlord' label='Overlord'/>
        <Field field='ancestalWeapons' label='Ancestal weapons'/>
      </ItemDetails>
    );

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    );
  }
};
