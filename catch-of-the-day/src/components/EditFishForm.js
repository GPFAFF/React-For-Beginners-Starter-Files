// EditFishForm
import React, { Component } from 'react';

class EditFishForm extends Component {
  render() {
    return (
       <div className='fish-edit'>
         <input type="text" name="name" placeholder="name" value={this.props.fish.name} />
         <input type="text" name="price" placeholder="price" value={this.props.fish.price} />
         <select type="text" name="status" placeholder="status" value={this.props.fish.status}>
          <option value="-1">Status</option>
          <option value="available">Fresh!</option>
          <option value="unavaiable">Sold Out!</option>
         </select>
         <textarea name="desc" placeholder="description"value={this.props.fish.desc} />
         <input type="text" name="image" value={this.props.name.fish.image} />
       </div>
    )
  }
}

export default EditFishForm;
