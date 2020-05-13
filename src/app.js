import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import Provider from './context/Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <NavBar/>
        <LandingPage />
      </Provider>
    );
  }
}

export default App;
