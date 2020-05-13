import React, { Component } from 'react';

export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info:
        'Due to the Stigma and scrutiny associated with mental illnesses, individuals who notice change in behavioural attitude may desist from seeking professional help cause of this stigma. Our main goal is to educate and establish effective means of communication between specialists and the community.'
    };
  }

  render() {
    return (
      <div className="about">
        <h1 className="heading">About Us</h1>
        <hr />
        <p className="medium-text">{this.state.info}</p>
      </div>
    );
  }
}
