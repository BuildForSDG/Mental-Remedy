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
            <div className="preview">
              <h1 className="sub-heading">Specialists Preview</h1>
              <hr />
              <SpecialistsLists specialists={specialists} getSpecialists={() => getSpecialists()} />
            </div>
          );
        }}
      </Consumer>
    );
  }
}
