import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import SpecialistsLists from './SpecialistsLists';

export default class SpecialistsPrev extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists } = value;
          return (
            <div>
              <h1>Specialists Preview</h1>
              <SpecialistsLists specialists={specialists} getSpecialists={() => getSpecialists()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
