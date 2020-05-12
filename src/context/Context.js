import React, { Component } from 'react';

const Context = React.createContext();


const reducer = (state, action) => {
  switch (action.type) {
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
      dispatch: (action) => this.setState((state) => reducer(state, action)),
      menuOpen: false
    };
  }


  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const { Consumer } = Context;

export default Provider;
