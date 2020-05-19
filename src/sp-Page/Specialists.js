import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import SpecialistsList from './SpecialistsList';

export default class Specialists extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists } = value;
          return (
            <div>
              <h1>Specialists</h1>
              <SpecialistsList specialists={specialists} getSpecialists={() => getSpecialists()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
