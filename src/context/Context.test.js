import React from 'react';
import renderer from 'react-test-renderer';
import Context from './Context';

describe('Context API', () => {
  it('Testing states', () => {
    const wrapper = renderer.create(<Context/>).getInstance();
    wrapper.state.dispatch({ type: 'TOGGLEMENU', payload: true });
    expect(wrapper.state.menuOpen).toBe(true);
  });
});
