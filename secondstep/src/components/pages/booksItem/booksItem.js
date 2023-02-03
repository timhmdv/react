/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

class BooksItem extends Component {
  gotService = new GotService();

  render() {
    return (
      <ItemDetails
        getData={this.gotService.getBook}
        itemId={this.props.itemId}>
        <Field field='name' label='Name'/>
        <Field field='numberOfPages' label='Number of pages'/>
        <Field field='publisher' label='Publisher'/>
        <Field field='released' label='Released'/>
      </ItemDetails>
    );
  }
}

BooksItem.propTypes = {
  itemId: PropTypes.number.isRequired,
};

export default function BooksItemWithParams() {
  const {id} = useParams();

  return <BooksItem itemId={id}/>;
}
