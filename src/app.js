/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Provider from './context/Context';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import SpecialistsPage from './pages/SpecialistsPage';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <LandingPage {...props} />} />
            <Route exact path="/specialists" render={(props) => <SpecialistsPage {...props} />} />
          </Switch>
          <Footer/>
        </Provider>
      </Router>
    );
  }
}

export default App;
