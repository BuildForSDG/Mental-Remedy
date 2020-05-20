import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import SpecialistsLists from './SpecialistsLists';

export default class SpecialistsPrev extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { getSpecialists, specialists, startSlider } = value;
          return (
            <div className="preview" onLoad={() => startSlider()}>
              <h1 className="sub-heading">Specialists Preview</h1>
              <hr />
              <div className="swiper-container">
                <SpecialistsLists specialists={specialists}
                getSpecialists={() => getSpecialists()} startSlider={() => startSlider()} />
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
