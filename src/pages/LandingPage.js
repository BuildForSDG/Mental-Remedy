import React, { Component } from 'react';
import IntroHeader from '../intro/IntroHeader';
import About from '../About/About';
import SpecialistsPrev from '../specialists/SpecialistsPrev';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <IntroHeader />
        <About />
        <SpecialistsPrev />
      </main>
    );
  }
}
export default LandingPage;
