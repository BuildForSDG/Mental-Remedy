import React, { Component } from 'react';
import FilterByName from './FilterByName';
import FilterByCity from './FilterByCity';

export default class Filter extends Component {
  render() {
    return (
            <div>
              <form onSubmit={(event) => event.preventDefault()}>
                <h1>Find the Best Specialist</h1>
                {/* Filter by name */}
                {this.props.nameFilter ? (
                  <FilterByName
                  getList={this.props.getList}
                  list={this.props.list}
                  dispatchType={this.props.dispatchType}
                 />
                ) : <span></span>}
                {/* Filter by city */}
                {this.props.cityFilter ? (
                  <FilterByCity
                   getList={this.props.getList}
                   list={this.props.list}
                   dispatchType={this.props.dispatchType}
                   />) : <span></span>}
              </form>
            </div>
    );
  }
}
