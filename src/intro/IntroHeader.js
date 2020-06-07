import React, { Component } from 'react';
import logo from '../favicon_io/android-chrome-512x512.png';

export default class IntroHeader extends Component {
  render() {
    return (
      <div className="skew">
        <div className="content">
          <h1 className="heading">Mental <img src={logo} alt="logo" className="logo" /> Remedy</h1>
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
