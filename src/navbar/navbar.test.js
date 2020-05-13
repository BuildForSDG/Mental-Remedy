import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import NavList from './NavList';
import NavItem from './NavItem';
import Provider from '../context/Context';

describe('Navbar Module', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider><NavBar/></Provider>, div);
    ReactDOM.render(<NavList/>, div);
    ReactDOM.render(<NavItem/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
