// App
import React, { Component } from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends Component {

  state = {
    fishes: {},
    order: {},
  }

  componentDidMount() {
    const { params } = this.props.match;
    // this.ref = base.syncState(`${params.storeId}/fishes`, {
    //   context: this,
    //   state: "fishes",
    // });
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
    console.log('It Updated!');
  }

  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    // take a copy of state

    const order = {...this.state.order};
    // add to order, or update number in order
    order[key] = order[key] + 1 || 1;
    // call setState to udpate our state object
    this.setState({order});
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline="Fresh Seafood Market" />
        <ul className="fishes">
<<<<<<< HEAD
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
        />
=======
          {Object.keys(this.state.fishes).map((key => <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]}/>))}
        </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
>>>>>>> 91dc72277cc1d5b5323c1b0c84995a319e53c012
        <Inventory
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish}
        />
      </div>
    )
  }
}

export default App;
