import React, { Component } from 'react';
import { Consumer } from '../context/Context';

export default class FilterByName extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.filterByName = this.filterByName.bind(this);
  }

  filter(list, keyword) {
    return list.filter((item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }

  filterByName(event, search, dispatch) {
    event.preventDefault();
    // check if input is empty
    if (event.target.value.length > 3) {
      // Get the list which is to be filtered
      const listToBeFiltered = this.props.list;
      // save input's value into a state
      dispatch({ type: 'SEARCH', payload: event.target.value });
      // filter the list
      const results = this.filter(listToBeFiltered, search);
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
                            <input
                              type="text"
                              list={value.search.length > 2 ? 'filter-by-name' : ''}
                              className="search-field name"
                              placeholder="Name..."
                              autoComplete="off"
                              onChange={(event) => this.filterByName(event, value.search, value.dispatch)}
                              onInput={(event) => value.dispatch({ type: 'SEARCH', payload: event.target.value })}
                            />
                            <datalist id="filter-by-name" >
                              {this.props.list.map((key) => (
                                <option value={key.name} key={key.name}
                                ></option>
                              ))}
                            </datalist>
                        </>
                  );
                }}
            </Consumer>
    );
  }
}
