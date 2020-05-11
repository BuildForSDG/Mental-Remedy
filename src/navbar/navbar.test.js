import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import NavList from './NavList';
import NavItem from './NavItem';

describe('Navbar Module', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NavBar />, div);
    ReactDOM.render(<NavList />, div);
    ReactDOM.render(<NavItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
