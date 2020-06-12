import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './Context';

describe('Context API', () => {
  it('Testing states', () => {
    const wrapper = renderer.create(<Router><Provider/></Router>).getInstance();
    // Changes the value of menuOpen state
    wrapper.state.dispatch({ type: 'TOGGLEMENU', payload: true });
    // Confirms if menuOpen state has been changed
    expect(wrapper.state.menuOpen).toBe(true);
  });
});
