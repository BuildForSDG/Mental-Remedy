import React, { Component } from 'react';

export default class SingleMd extends Component {
  render() {
    return (
            <div className="lg-container">
                <h1 className="sub-heading">{this.props.md.title}</h1>
            </div>
    );
  }
}
