// Order
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../helpers';

class Fish extends Component {

  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  }

  render() {
    const {index} = this.props;
    const {image, name, price, desc, status} = this.props.details;
    //const isAvailable = status === 'available';

    const isAvailable = status === 'available';
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
