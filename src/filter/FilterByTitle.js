import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context/Context';

class FilterByTitle extends Component {
  constructor(props) {
    super(props);
    this.filter = this.filter.bind(this);
    this.filterByTitle = this.filterByTitle.bind(this);
  }

  filter(list, keyword) {
    return list.filter((item) => item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  }

  filterByTitle(event, search, dispatch) {
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
                              list={value.search.length > 2 ? 'filter-by-title' : ''}
                              className="search-field name"
                              placeholder="Title..."
                              autoComplete="off"
                              onChange={(event) => this.filterByTitle(event, value.search, value.dispatch)}
                              onInput={(event) => value.dispatch({ type: 'SEARCH', payload: event.target.value })}
                            />
                            <datalist id="filter-by-title" >
                              {this.props.list.map((key) => (
                                <option value={key.title} key={key.id}
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

FilterByTitle.propTypes = {
  dispatchType: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  getList: PropTypes.func.isRequired
};

export default FilterByTitle;
