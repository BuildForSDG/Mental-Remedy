import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Context } from '../context/Context';
import About from './About';
import Bio from './Bio';
import Services from './Services';
import { services } from '../context/data';
import ServiceList from './ServiceList';
import Service from './Service';

Enzyme.configure({ adapter: new Adapter() });


describe('About component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.find('Bio').length).toEqual(1);
    expect(wrapper.find('Services').length).toEqual(1);
  });
});

describe('Bio component', () => {
  it('consumes data from context', () => {
    const wrapper = mount(<Bio />, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          aboutInfo: 'testing'
        }
      }
    });
    expect(wrapper.find('[data-about-info]').text()).toBe('testing');
  });
});

describe('Services component', () => {
  it('consumes data from context', () => {
    // Add sample data to services component using context
    const wrapper = mount(<Services />, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          getServices: () => 'success', services: services
        }
      }
    });
    // confirm services are consumed and passed down to ServiceList component
    expect(wrapper.find('ServiceList').props().services.length).toBeGreaterThanOrEqual(1);
    // confirm get services method is consumed and passed down to ServiceList component
    expect(wrapper.find('ServiceList').props().getServices()).toBe('success');
  });
});

describe('ServiceList component', () => {
  it('receive data in props', () => {
    // receive sample data in props
    const wrapper = mount(<ServiceList services={services} getServices={() => 'success'} />);
    // confirm services are recieved in props
    expect(wrapper.props().services.length).toBeGreaterThanOrEqual(1);
    // confirm get services is recieved in props
    expect(wrapper.props().getServices()).toBe('success');
  });
});

describe('Service component', () => {
  const service = {
    id: 2,
    title: 'Specialist plattform',
    description:
      'A platform for specialist ',
    image: 'demo.svg'
  };
  it('receives data in props', () => {
    // receive sample data in props
    const wrapper = mount(<Service service={service} />);
    // confirm it has id property
    expect(wrapper.props().service).toHaveProperty('id');
    // confirm it has title property
    expect(wrapper.props().service).toHaveProperty('title');
    // confirm it has description property
    expect(wrapper.props().service).toHaveProperty('description');
    // confirm it has image property
    expect(wrapper.props().service).toHaveProperty('image');
  });
});
