// AddFishForm
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func,
  }

  createFish = (event) => {
    event.preventDefault();
    console.log('making a fish');
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    }
    this.props.addFish(fish);
    event.target.reset();
  }
  render() {
    return (
      <div className="fish-edit" onSubmit={this.createFish}>
        <form action="">
          <input name="name" ref={this.nameRef} type="text" placeholder="name" />
          <input name="price" ref={this.priceRef} type="text" placeholder="price" />
          <select name="status" ref={this.statusRef}>
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="desc" />
          <input name="image" ref={this.imageRef} type="text" placeholder="image" />
          <button type="submit">Add Fish</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm;
