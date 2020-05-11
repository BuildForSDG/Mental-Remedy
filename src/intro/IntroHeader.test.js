import React from 'react';
import ReactDOM from 'react-dom';
import IntroHeader from './IntroHeader';

describe('IntroHeader Module', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IntroHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
