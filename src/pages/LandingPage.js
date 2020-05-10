import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <div className="skew">
          <div className="content">
            <h1>Mental Remedy</h1>
            <p>linking mental health specialist to the community.</p>
            <input type="text" name="box" placeholder="Search For Specialists...." />
          </div>
        </div>
      </main>
    );
  }
}
export default LandingPage;
