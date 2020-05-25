import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="wrap-footer">
        <div className="main-footer">
          <div className="footer-container">
            <div className="row">
              {/* column 1*/}
              <div className="col">
                <ul className="list-unstyled">
                  <h1 className="small-text">Contact</h1>
                  <li className="footer-row">Phone: 00000 00000</li>
                  <li className="footer-row2">Temp place</li>
                  <li className="footer-row3">345 holder street</li>
                  <li className="footer-row4">Africa</li>
                </ul>
              </div>
              {/* column 2*/}
              <div className="col2">
                <ul className="list-unstyled">
                  <h1 className="small-text">Home</h1>
                  <li className="footer-row">About</li>
                  <li className="footer-row2">Mental Disoders</li>
                  <li className="footer-row3">Specialists</li>
                  <li className="footer-row4">My account</li>
                </ul>
              </div>
              {/* column 3*/}
              <div className="col3">
                <ul className="list-unstyled">
                  <h1 className="small-text">Cities</h1>
                  <li className="footer-row">Nairobi </li>
                  <li className="footer-row2">Johannesburg </li>
                </ul>
              </div>
            </div>
            {/* footer bottom */}
            <div className="footer-bottom">
              <p className="xxsmall-text">&copy;{new Date().getFullYear()} team 158 - all rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
