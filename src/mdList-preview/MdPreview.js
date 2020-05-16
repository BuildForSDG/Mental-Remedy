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
                            <MdListPreview mdList={mentalDisorders}
                            getMdlist={() => getMdlist()} />
                          <button className="small-heading large-btn">Find More <MdFindReplace/></button>
                        </div>
                  );
                }}
            </Consumer>
    );
  }
}
