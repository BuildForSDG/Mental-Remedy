import React, { Component } from 'react';
import IntroHeader from '../intro/IntroHeader';
import About from '../About/About';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <IntroHeader />
        <About />
      </main>
    );
  }
}
export default LandingPage;
