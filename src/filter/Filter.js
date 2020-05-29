import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>Find the Best Specialist</h1>
          <input type="text" className="search-field name" placeholder="Name..." />
          <select name="cities" className="search-field city" id="select-city">
            <option value="1">Nairobi</option>
            <option value="2">Accra</option>
            <option value="3">Kampala</option>
            <option value="4">Addis Ababa</option>
            <option value="5">Lagos</option>
          </select>
        </form>
      </div>
    );
  }
}
