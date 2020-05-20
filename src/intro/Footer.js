import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="main-footer">
          <div className="footer-container">
            <div className="row">
              {/* column 1*/}
              <div className="col">
                <ul className="list-unstyled">
                  <h1 className="small-text">Contact Info</h1>
                  <li>Phone:000 000 0000</li>
                  <li>Temp place</li>
                  <li>345 holder street</li>
                  <li>Africa</li>
                </ul>
              </div>
              {/* column 2*/}
              <div className="col">
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About</li>
                  <li>Mental Disoders</li>
                  <li>Specialists</li>
                  <li>My account</li>
                </ul>
              </div>
              {/* column 3*/}
              <div className="col">
                <div>
                  <h1 className="heading">Mental </h1>
                </div>
              </div>
              {/* column 3 and a half*/}
              <div className="col">
                <div>
                  <h1 className="heading">Remedy</h1>
                </div>
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
