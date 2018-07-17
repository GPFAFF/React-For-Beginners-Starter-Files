// Order
import React, { Component } from 'react';
import {formatPrice } from '../helpers';

class Fish extends Component {
  render() {

    const {index} = this.props;
    const {image, name, price, desc, status} = this.props.details;

    const isAvailable = this.props.details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';

    return (
      <li className='menu-fish'>
        <img src={image} alt="" />
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
