// Inventory
import React, { Component } from 'react';
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';
class Inventory extends Component {

  render() {
    console.log(this.props.fishes);

    return (
      <div className="inventory">
        <h2>Here is the inventory</h2>
        {Object.keys(this.props.fishes).map((key) =>
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
          />
        )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
