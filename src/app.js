import React, { Component } from 'react';
import NavBar from './navbar/NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <NavBar />
            <main>
                <h1 className="sub-heading">BuildForSDG</h1>
            </main>
            </>
    );
  }
}

export default App;
