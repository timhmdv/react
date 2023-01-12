import React, {Component} from 'react';
import './itemList.css';
// eslint-disable-next-line require-jsdoc
export default class ItemList extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
                    John Snow
        </li>
        <li className="list-group-item">
                    Brandon Stark
        </li>
        <li className="list-group-item">
                    Geremy
        </li>
      </ul>
    );
  }
}
