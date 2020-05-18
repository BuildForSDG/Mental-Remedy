import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import './App.css';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';
import Specialists from './pages/Specialists';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/specialists" component={Specialists} />
          <Route exact component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
