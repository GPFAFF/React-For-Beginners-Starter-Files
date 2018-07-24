// Inventory
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditFishForm from './EditFishForm';
import AddFishForm from './AddFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';
import firebase from 'firebase';

class Inventory extends Component {

  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  }

   state = {
    uid: null,
    owner: null,
  }

  authHandler = async (authData) => {
    // Look up store
    const store = await base.fetch(this.props.storeId, {context: this});
    console.log(store);

    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }

    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  }

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }

  render() {
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    // check if owner
    if (this.state.uid !== this.state.owner) {
      return <p>Sorry you are not the owner</p>
    }

    // they are owner, render inventory
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
