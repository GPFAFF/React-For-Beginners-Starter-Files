// StorePicker
import React, { Component } from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    // get text from input
    const storeName = this.myInput.current.value;
    console.log(storeName);
    // const storeName = $('input');
    this.props.history.push(`/store/${storeName}`)
    // navigate to store/:storeId
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ></button>
      </form>
    )
  }
}

export default StorePicker;
