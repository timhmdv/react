/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './itemDetails.css';

const Field = ({item, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {Field};

export default class ItemDetails extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const {getData, itemId} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
        .then((item) => {
          this.setState({item});
        });
  };
  render() {
    if (!this.state.item) {
      return <span className='select-error'>Please select a Item</span>;
    }

    const {item} = this.state;

    const {name} = item;

    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item});
            })
          }
        </ul>
      </div>
    );
  }
}

Field.propTypes = {
  item: PropTypes.object,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

ItemDetails.propTypes = {
  itemId: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
  children: PropTypes.array,
};
