// Order
import React, { Component } from 'react';
import {formatPrice} from '../helpers';

class Order extends Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (!fish) return null;

    // make sure fish is loaded before continuing
    const isAvailable = fish && fish.status === "available";

    if (!isAvailable) {
      return (
        <li key={key}>Sorry, {fish ? fish.name : fish} is no longer avail!</li>
      )
    }
    return (
      <li key={key}>
        <span>{count}lbs {fish.name}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>
        <button onClick={() => {this.props.removeItem(key)}}>
          &times;
        </button>
      </li>
    )
  }

  render() {

    const orderIds = Object.keys(this.props.order);
    const total =  orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";

      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Here is your order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    )
  }
}

export default Order;
