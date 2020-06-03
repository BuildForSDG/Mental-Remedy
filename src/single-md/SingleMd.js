import React, { Component } from 'react';

export default class SingleMd extends Component {
  render() {
    return (
            <div className="lg-container">
                <h1 className="sub-heading">{this.props.md.title}</h1>
                <div className="breadcrumbs">
                    <span className="xxsmall-text"><a href="/">Mental Disorders</a> / {this.props.md.title}</span>
                </div>
            </div>
    );
  }
}
