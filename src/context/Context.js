import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { services, mentalDisorders, specialists } from './data';
import startSlider from '../swiper';
import reducer from './Reducers';
import { firebaseAuth } from '../firebase/firebase';

export const Context = React.createContext();

// This global variable is used to identify whether component is mounted or unmouted
let isMounted = true;

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // All states are to be created here
      menuOpen: false,
      dropDownOpen: false,
      user: {},
      errorMessage: '',
      passwordError: '',
      signUp: this.signUp,
      logOut: this.logOut,
      logIn: this.logIn,
      mentalDisorders: [],
      nameSearch: '',
      titleSearch: '',
      citySearch: '',
      aboutInfo:
        'Due to the Stigma and scrutiny associated with mental illnesses, individuals who notice change in behavioural attitude may desist from seeking professional help cause of this stigma. Our main goal is to educate and establish effective means of communication between specialists and the community.',
      services: [],
      getServices: () => this.getServices(),
      getMdlist: () => this.getMdlist(),
      specialists: [],
      getSpecialists: () => this.getSpecialists(),
      startSlider: () => startSlider(),
      dispatch: (action) => this.setState((state) => reducer(state, action))
    };
  }

  async getServices() {
    try {
      this.setState({ services: [] });
      //fetch data from backend
      const ser = await services;
      ser.map((key) => (isMounted ? this.setState({ services: [...this.state.services, key] }) : null));
    } catch (error) {
      console.error(error);
    }
  }

  async getSpecialists() {
    try {
      this.setState({ specialists: [] });
      //fetch data from the backend
      const spec = await specialists;
      spec.map((key) => (isMounted ? this.setState({ specialists: [...this.state.specialists, key] }) : null));
    } catch (error) {
      console.error(error);
    }
  }

  async getMdlist() {
    try {
      this.setState({ mentalDisorders: [] });
      //fetch data from backend
      const mdlist = await mentalDisorders;
      mdlist.map((key) =>
        isMounted ? this.setState({ mentalDisorders: [...this.state.mentalDisorders, key] }) : null
      );
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    isMounted = true;
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: {
            id: user.uid,
            email: user.email
          }
        });
      }
    });
  }

  componentWillUnmount() {
    isMounted = false;
  }

  signUp = async (email, password) => {
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.setState({ errorMessage: 'Success' });
      setTimeout(() => {
        this.props.history.push('/');
        this.setState({ errorMessage: '' });
      }, 2000);
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  }

  logOut = async () => {
    try {
      await firebaseAuth.signOut();
      this.setState({ user: {} });
      this.props.history.push('/login');
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  };

  logIn = async (email, password, event) => {
    try {
      event.preventDefault();
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      setTimeout(() => {
        this.props.history.push('/');
        this.setState({ errorMessage: '' });
      }, 2000);
      this.setState({
        errorMessage: 'Success'
      });
    } catch (error) {
      this.setState({
        errorMessage: error.message
      });
    }
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

// Consumer will be used in the components that require access to these states
export const { Consumer } = Context;

// Provider accepts a value prop to be passed to consuming components that are its descendants
export default withRouter(Provider);
