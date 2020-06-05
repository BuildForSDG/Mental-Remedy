/* eslint-disable linebreak-style */
import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Provider from './context/Context';
import NavBar from './navbar/NavBar';
import './App.css';
import Footer from './footer/Footer';
import PreLoader from './pre-loader/PreLoader';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const MentalDisorders = lazy(() => import('./pages/MentalDisorders'));
const SpecialistsPage = lazy(() => import('./pages/SpecialistsPage'));
const SingleMdPage = lazy(() => import('./pages/SingleMdPage'));
const ForrumPage = lazy(() => import('./pages/ForumPage'));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<PreLoader/>}>
        <Provider>
          <NavBar />
          <Switch>
            <Route exact path="/" render={(props) => <LandingPage {...props} />} />
            <Route exact path="/specialists" render={(props) => <SpecialistsPage {...props} />} />
            <Route exact path="/about" render={(props) => <AboutPage {...props} />} />
            <Route exact path="/mental-disorders" render={(props) => <MentalDisorders {...props} />} />
            <Route exact path="/mental-disorders/:id/:title" render={(props) => <SingleMdPage {...props} />}/>
            <Route exact path="/forum" render={(props) => <ForrumPage {...props} />} />
          </Switch>
          <Footer />
        </Provider>
        </Suspense>
      </Router>
    );
  }
}

export default App;
