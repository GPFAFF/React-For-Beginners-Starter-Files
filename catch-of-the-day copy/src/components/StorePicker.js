// StorePicker
import React, { Component } from 'react';

class StorePicker extends Component {
  render() {
    return (
      <form className="course-selector">
        <h2>Please enter a Golf Course</h2>
        <input type="text" required placeholder="Course Name" />
        <button type="submit">Visit Course ></button>
      </form>
    )
  }
}

export default StorePicker;
