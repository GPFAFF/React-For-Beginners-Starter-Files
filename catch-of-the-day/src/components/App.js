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

  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes })
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
          {Object.keys(this.state.fishes).map((key => <Fish key={key} index={key} details={this.state.fishes[key]}/>))}
        </ul>
        </div>
        <Order />
        <Inventory
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
