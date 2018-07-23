// App
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from "../base";

class App extends Component {

  state = {
    fishes: {},
    order: {},
  }

  static propTypes = {
    match: PropTypes.string,
  }

  componentDidMount() {
    const { params } = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    console.log(localStorageRef);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentWillUnmount() {
    console.log('unmounting');
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    console.log('It Updated!');
  }

  addToOrder = (key) => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }

  updateFish = (key, updatedFish) => {
    // take copy of state
    const fishes = {...this.state.fishes};
    // update that state
    fishes[key] = updatedFish;
    // set to state
    this.setState({fishes});
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  deleteFish = (key) => {
    const fishes = {...this.state.fishes};
    // updates state
    fishes[key] = null;
    // update the deleted state
    this.setState({fishes});
  }


  addToOrder = (key) => {
    // take a copy of state
    const order = {...this.state.order};
    // add to order, or update number in order
    order[key] = order[key] + 1 || 1;
    // call setState to udpate our state object
    this.setState({order});
  }

  removeItem = (key) => {
    const order = {...this.state.order};
    delete order[key];
    this.setState({order});
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
          {Object.keys(this.state.fishes)
            .map((key =>
              <Fish
                key={key}
                index={key}
                addFish={this.addFish}
                addToOrder={this.addToOrder}
                details={this.state.fishes[key]}
              />
            ))
          }
        </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeItem={this.removeItem}
        />
        <Inventory
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
          deleteFish={this.deleteFish}
          updateFish={this.updateFish}
        />
      </div>
    )
  }
}

export default App;
