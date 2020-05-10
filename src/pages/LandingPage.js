import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <div className="skew">
          <div className="content">
            <h1 className="heading">Mental Remedy</h1>
            <p className="small-text">Linking mental health specialist to the community.</p>
            <input className="small-text" type="text" name="box" placeholder="mental disorders, specialists...." />
          </div>
        </div>
      </main>
    );
  }
}
export default LandingPage;
