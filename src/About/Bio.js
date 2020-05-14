import React, { Component } from 'react';
import { Consumer } from '../context/Context';

export default class Bio extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { aboutInfo } = value;
          return (
            <div className="about">
              <h1 className="heading">About Us</h1>
              <hr />
              <p className="medium-text">{aboutInfo}</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
