// Inventory
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';
class Inventory extends Component {

  static PropTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  }

  render() {
    return (
      <div className="inventory">
        <h2>Here is the inventory</h2>
        {Object.keys(this.props.fishes).map((key) =>
          <EditFishForm
            fish={this.props.fishes[key]}
            key={key}
            index={key}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
          />
        )}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    )
  }
}

export default Inventory;
