import React, { Component } from 'react';
import IntroHeader from '../intro/IntroHeader';
import About from '../About/About';
import MdPreview from '../mdList-preview/MdPreview';

class LandingPage extends Component {
  render() {
    return (
      <main>
        <IntroHeader />
        <About />
        <MdPreview />
      </main>
    );
  }
}
export default LandingPage;
