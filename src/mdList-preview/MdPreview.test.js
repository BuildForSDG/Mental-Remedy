import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { Context } from '../context/Context';
import MdPreview from './MdPreview';
import { mentalDisorders } from '../context/data';
import MdListPreview from './MdListPreview';
import MdItemPreview from './MdItemPreview';

Enzyme.configure({ adapter: new Adapter() });

describe('MdPreview component', () => {
  it('it consumes data from context', () => {
    // Add sample data to MdPreview component using context
    const wrapper = mount(<Router><MdPreview /></Router>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getMdlist: () => 'success', mentalDisorders: mentalDisorders
        }
      }
    });
    // confirm sample data is consumed and passed down to MdListPreview component
    expect(wrapper.find('MdListPreview').props().mdList.length).toBeGreaterThan(1);
    // confirm getMdList method is consumed and passed down to MdListPreview component
    expect(wrapper.find('MdListPreview').props().getMdlist()).toBe('success');
  });
});

describe('MdListPreview component', () => {
  it('receives data in props', () => {
    // receive data in props
    const wrapper = mount(<MdListPreview mdList={mentalDisorders} getMdlist={() => 'success'} />);
    // confirm list of mental disorders is recieved in props
    expect(wrapper.props().mdList).toBe(mentalDisorders);
    // confirm get mental disorders method is received in props
    expect(wrapper.props().getMdlist()).toBe('success');
  });
});

describe('MdItemPreview component', () => {
  it('receives data in props', () => {
    let mentalDisorder = {};
    mentalDisorders.map((key) => (
      mentalDisorders.indexOf(key) < 1 ? mentalDisorder = key : null
    ));
    // receive data in props
    const wrapper = mount(
    <MdItemPreview mentalDisorder={mentalDisorder} mdList={mentalDisorders} />
    );
    // confirm it has properties required by this component
    expect(wrapper.props().mentalDisorder).toHaveProperty('id');
    expect(wrapper.props().mentalDisorder).toHaveProperty('title');
    expect(wrapper.props().mentalDisorder).toHaveProperty('description');
  });
});
