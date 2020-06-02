import React, { Component } from 'react';
import { MdFindReplace } from 'react-icons/md';
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
              <h1 className="heading">Specialists Preview</h1>
              <hr />
              <div className="swiper-container">
                <SpecialistsLists specialists={specialists}
                getSpecialists={() => getSpecialists()} startSlider={() => startSlider()} />
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              <button className="small-heading large-btn"><MdFindReplace/> Browse All</button>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
