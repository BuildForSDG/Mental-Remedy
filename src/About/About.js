import React, { Component } from 'react';
import Bio from './Bio';
import Services from './Services';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Bio />
        <Services />
      </div>
    );
  }
}
