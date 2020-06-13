import React, { Component } from 'react';
import { Consumer } from '../context/Context';
import FirebaseError from '../login-signup/FirebaseError';

class Login extends Component {
  constructor(props) {
    super(props);
    this.goToSignup = this.goToSignup.bind(this);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  goToSignup(event) {
    event.preventDefault();
    this.props.history.push('/signup');
  }

  render() {
    return (
        <Consumer>
          {(value) => {
            return (
              <main>
                  {value.admin ? (
                    <form>
                      <div className="admin-wrapper">
                          <div className="center-box">
                              <h1 className="sub-heading">Admin</h1>
                              <FirebaseError errorMessage={value.errorMessage} />
                              <input type="email" name="email" className="small-text" id="email" placeholder="Email" ref={this.emailRef} />
                              <button className="small-heading large-btn"
                            onClick={(event) => value.makeUserAdmin(this.emailRef.current.value, event)}>Add Admin</button>
                          </div>
                      </div>
                    </form>
                  ) : (<h1>Page not found</h1>)}
              </main>
            );
          }}
        </Consumer>
    );
  }
}

export default Login;
