import React, { Component } from 'react';
import inputFld from './inputField';
import submitBtn from './submitButton';

class loginForm extends Component {
  render() {
    return (
      <div className="skew">
        <h1 className='heading'><strong> Mental Remedy </strong></h1>
      <div className='loginWrap'>
           <div class="loginPage field">
  <input type="input" class="inputField" placeholder="Name" name="name" id='name' required />
  <label for='name' class="inputs"></label>
    <input type="password" class="inputField" placeholder="password" name="password" id='password' required />
  <label for='password' class="inputs"></label>
            <div className='submitButton'>
              <a href='link' className='loginbtn'>login</a>
              <br />
              <br/>
              <a href='link' className='loginbtn'>sign up</a>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default loginForm;
