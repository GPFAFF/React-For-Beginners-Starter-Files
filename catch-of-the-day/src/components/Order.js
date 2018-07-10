// Order
import React, { Component } from 'react';
import {formatPrice} from '../helpers';

class Order extends Component {

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === "available";
    if (!isAvailable) {
     return (
      <li>Sorry {fish ? fish.name : 'fish'} is not available </li>
      )
    }
    return <li key={key}>{count} lbs {fish.name} {formatPrice(count * fish.price)}</li>
  }

  render() {
    const orderIds = Object.keys(this.props.order);

    const orderTotal = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return prevTotal + (count * fish.price)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order">
        <h2>Here is your order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
        </ul>

        <div className="total">
        <strong>{formatPrice(orderTotal)}</strong></div>
      </div>
    )
  }
}

export default Order;
