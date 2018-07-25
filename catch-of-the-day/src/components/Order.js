// Order
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {formatPrice} from '../helpers';

class Order extends Component {

  static propTypes = {
    renderOrder: PropTypes.func,
    removeItem: PropTypes.func,
    fishes: PropTypes.object,
    order: PropTypes.object,
  }

  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (!fish) return null;

    // make sure fish is loaded before continuing
    const isAvailable = fish && fish.status === "available";

    if (!isAvailable) {
      return (
        <CSSTransition classNames="order" key={key} timeout={{enter: 250, exit: 250}}>
          <li key={key}>Sorry, {fish ? fish.name : fish} is no longer avail!</li>
        </CSSTransition>
      )
    }
    return (
      <CSSTransition classNames="order" key={key} timeout={{enter: 500, exit: 500}}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{enter: 500, exit: 100}}
              >
               <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
               lbs {fish.name}&nbsp;
              <span className="price">{formatPrice(count * fish.price)}</span>
            <button onClick={() => {this.props.removeItem(key)}}>
              &times;
            </button>
          </span>
        </li>
      </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
      </div>
    )
  }
}

export default Order;
