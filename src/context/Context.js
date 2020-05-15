import React, { Component } from 'react';
import services from './data';

const Context = React.createContext();

// This global variable is used to identify whether component is mounted or unmouted
let isMounted = true;

const reducer = (state, action) => {
  switch (action.type) {
    // Functions for changing the state value are to be created here
    case 'TOGGLEMENU':
      return {
        ...state,
        menuOpen: action.payload
      };
    default:
      return state;
  }
};

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // All states are to be created here
      menuOpen: false,
      aboutInfo:
        'Due to the Stigma and scrutiny associated with mental illnesses, individuals who notice change in behavioural attitude may desist from seeking professional help cause of this stigma. Our main goal is to educate and establish effective means of communication between specialists and the community.',
      services: [],
      getServices: () => this.getServices(),
      dispatch: (action) => this.setState((state) => reducer(state, action))
    };
    this.getServices = this.getServices.bind(this);
  }

  async getServices() {
    try {
      this.setState({ services: [] });
      //fetch data from backend
      const ser = await services;
      ser.map((key) => (
        isMounted ? this.setState({ services: [...this.state.services, key] }) : null));
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    isMounted = true;
  }

  componentWillUnmount() {
    isMounted = false;
  }

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

// Consumer will be used in the components that require access to these states
export const { Consumer } = Context;

// Provider accepts a value prop to be passed to consuming components that are its descendants
export default Provider;
