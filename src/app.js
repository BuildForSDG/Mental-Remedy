import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Provider from './context/Context';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import SpecialistsPage from './pages/SpecialistsPage';

class App extends Component {
  render() {
    return (
      <>
        <Provider>
          <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" render={(props) => <LandingPage {...props} />} />
              <Route exact path="/specialists" render={(props) => <SpecialistsPage {...props} />} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
