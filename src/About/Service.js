import React, { Component } from 'react';

export default class Service extends Component {
  render() {
    const { service } = this.props;
    return (
      <li className="service">
        <img src={service.image} alt="service" height="60" width="120" />
        <h1 className="medium-text">{service.title}</h1>
        <p className="small-text">{service.description}</p>
      </li>
    );
  }
}
