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
        />
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
