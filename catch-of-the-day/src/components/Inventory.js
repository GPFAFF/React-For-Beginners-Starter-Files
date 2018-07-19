// Inventory
import React, { Component } from 'react';
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';
class Inventory extends Component {

  render() {
    return (
      <div className="inventory">
        <h2>Here is the inventory</h2>
        {Object.keys(this.props.fishes).map((fish, key) => {
          <EditFishForm fish={this.props.fishes[key]} key={key} />
        })}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
