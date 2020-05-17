import React from 'react';
import ReactDOM from 'react-dom';
import SpecialistsPrev from './SpecialistsPrev';

describe('SpecialistPrev Module', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpecialistsPrev />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
