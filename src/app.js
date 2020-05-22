/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import Provider from './context/Context';
import Footer from './intro/Footer';

class App extends Component {
  render() {
    return (
      <Provider>
        <NavBar />
        <LandingPage />
        <Footer />
      </Provider>
    );
  }
}

export default App;
