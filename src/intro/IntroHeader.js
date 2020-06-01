import React, { Component } from 'react';

export default class IntroHeader extends Component {
  render() {
    return (
      <div className="skew">
        <div className="content">
          <h1 className="heading">Mental Remedy</h1>
          <p className="small-text">Linking mental health specialist to the community.</p>
          <input
            className="intro-search small-text"
            type="text"
            name="box"
            placeholder="mental disorders, specialists...."
          />
        </div>
      </div>
    );
  }
}
