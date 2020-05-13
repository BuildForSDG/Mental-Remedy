import React from 'react';
import renderer from 'react-test-renderer';
import Provider from './Context';

describe('Context API', () => {
  it('Testing states', () => {
    const wrapper = renderer.create(<Provider/>).getInstance();
    // Changes the value of menuOpen state
    wrapper.state.dispatch({ type: 'TOGGLEMENU', payload: true });
    // Confirms if menuOpen state has been changed
    expect(wrapper.state.menuOpen).toBe(true);
  });
});
