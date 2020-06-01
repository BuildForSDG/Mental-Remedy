import React, { Component } from 'react';
import MdMain from '../mental-disorders/MdMain';

export default class MentalDisorders extends Component {
  render() {
    return (
            <main>
                <h1 className="heading">Mental Health</h1>
                <MdMain/>
            </main>
    );
  }
}
