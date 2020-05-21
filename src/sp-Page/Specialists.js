import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import SpecialistsList from './SpecialistsList';
import Filter from '../filter/Filter';

export default class Specialists extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists } = value;
          return (
            <div>
              <Filter />
              <SpecialistsList specialists={specialists} getSpecialists={() => getSpecialists()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
