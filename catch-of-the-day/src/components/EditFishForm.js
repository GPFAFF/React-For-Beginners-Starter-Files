// EditFishForm
import React, { Component } from 'react';

class EditFishForm extends Component {
  render() {
    return (
       <div className='fish-edit'>
         <input type="text" name="name" />
         <input type="text" name="price" />
         <select type="text" name="status">
          <option value="available">Fresh!</option>
          <option value="unavaiable">Sold Out!</option>
         </select>
         <textarea name="desc" />
         <input type="text" name="image" />
       </div>
    )
  }
}

export default EditFishForm;
