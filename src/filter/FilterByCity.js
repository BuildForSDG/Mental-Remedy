import React, { Component } from 'react';
import { Consumer } from '../context/Context';

export default class FilterByCity extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.filterByCity = this.filterByCity.bind(this);
  }

  filter(list, keyword) {
    return list.filter((item) => item.city.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }

  filterByCity(event, search, dispatch) {
    event.preventDefault();
    // check if input is empty
    if (event.target.value.length > 1) {
      // Get the list which is to be filtered
      const allSpecialists = this.props.list;
      // save input's value into a state
      dispatch({ type: 'SEARCH', payload: event.target.value });
      // filter the list
      const results = this.filter(allSpecialists, search);
      // update state with filtered list
      return dispatch({ type: this.props.dispatchType, payload: results });
    }
    // restore state if input is empty
    return this.props.getList();
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                            <input type="text" name="cities" className="search-field city"
                              list={value.search.length > 2 ? 'select-city' : ''}
                              placeholder="City..."
                              autoComplete="off"
                              onChange={(event) => this.filterByCity(event, value.search, value.dispatch)}
                              onInput={(event) => value.dispatch({ type: 'SEARCH', payload: event.target.value })}
                            />
                            <datalist id="select-city">
                              <option value="Nairobi"></option>
                              <option value="Accra"></option>
                              <option value="Kampala"></option>
                              <option value="Addis"></option>
                              <option value="Lagos"></option>
                            </datalist>
                        </>
                  );
                }}
            </Consumer>
    );
  }
}
