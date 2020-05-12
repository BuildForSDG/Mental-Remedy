import React from 'react';
import renderer from 'react-test-renderer';
import Context from './Context';

describe('Context API', () => {
  it('Testing states', () => {
    const wrapper = renderer.create(<Context/>).getInstance();
    // Changes the value of menuOpen state
    wrapper.state.dispatch({ type: 'TOGGLEMENU', payload: true });
    // Confirms if menuOpen state has been changed
    expect(wrapper.state.menuOpen).toBe(true);
  });
});
