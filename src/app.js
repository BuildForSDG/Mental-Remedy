import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';

class App extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <LandingPage />
      </>
    );
  }
}

export default App;
