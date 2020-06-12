import React, { Component } from 'react';

class loginForm extends Component {
  render() {
    return (
      <div className="skew">
        <h1 className="heading">
          <strong> Mental Remedy </strong>
        </h1>
        <div className="loginWrap">
          <div className="loginPage field">
            <input type="input" className="inputField" placeholder="Name" name="name" id="name" required />
            <label htmlFor="name" className="inputs"></label>
            <input
              type="password"
              className="inputField"
              placeholder="password"
              name="password"
              id="password"
              required
            />
            <label htmlFor="password" className="inputs"></label>
            <div className="submitButton">
              <a href="link" className="loginbtn">
                login
              </a>
              <br />
              <br />
              <a href="link" className="loginbtn">
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default loginForm;
