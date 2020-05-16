import React, { Component } from 'react';
import { MdFindReplace } from 'react-icons/md';
import { Consumer } from '../context/Context';
import MdListPreview from './MdListPreview';

export default class MdPreview extends Component {
  render() {
    return (
            <Consumer>
                {(value) => {
                  const { mentalDisorders, getMdlist } = value;
                  return (
                        <div className="md-preview">
                          <h1 className="heading">Mental Health</h1>
                          <p className="medium-text p-1">Mental health refers to cognitive,
                          behavioral, and emotional well-being. It is all about how people think, feel,
                          and behave. Here are some of the
                          common mental health disorders: </p>
                            <MdListPreview mdList={mentalDisorders}
                            getMdlist={() => getMdlist()} />
                          <button className="small-heading large-btn"><MdFindReplace/> Browse All</button>
                        </div>
                  );
                }}
            </Consumer>
    );
  }
}
