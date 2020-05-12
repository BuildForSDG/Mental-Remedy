import React, { Component } from 'react';

const Context = React.createContext();


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
      dispatch: (action) => this.setState((state) => reducer(state, action))
    };
  }


  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

// Consumer will be used in the components that require access to these states
export const { Consumer } = Context;

// Provider accepts a value prop to be passed to consuming components that are its descendants
export default Provider;
