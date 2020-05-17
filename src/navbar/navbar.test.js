import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from './NavBar';
import NavList from './NavList';
import NavItem from './NavItem';
import { Context } from '../context/Context';

Enzyme.configure({ adapter: new Adapter() });

describe('Navbar Component', () => {
  it('toggles classes and menu icon in navbar component', () => {
    const wrapper = mount(<NavBar/>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          menuOpen: false, dispatch: () => {}, user: { id: 1 }, dropDownMenu: false
        }
      }
    });
    // confirm default classes
    expect(wrapper.find('nav').hasClass('navbar-wrapper')).toBe(true);
    expect(wrapper.find('[data-menu-btn]').hasClass('inactive')).toBe(true);
    // confirm default icon
    expect(wrapper.find('[data-menu-btn]').find('GiHamburgerMenu').length).toEqual(1);
    // toggle context value
    const provider = wrapper.getWrappingComponent();
    provider.setProps({
      value: {
        menuOpen: true, dispatch: () => {}, user: { id: 1, email: '' }, dropDownMenu: false
      }
    });
    // Confirm classes are toggled
    expect(wrapper.find('nav').hasClass('nav-active')).toBe(true);
    expect(wrapper.find('[data-menu-btn]').hasClass('menu-active')).toBe(true);
    // Confirm icons are toggled
    expect(wrapper.find('[data-menu-btn]').find('AiOutlineClose').length).toEqual(1);
  });
});

describe('Navlist Component', () => {
  it('showes dropdown menu only when user is logged in', () => {
    // confirm dropdown is hidden user isn't logged in
    let wrapper = mount(<NavList menuOpen={false} dropDownMenu={false}
      dispatch={() => {} } user={{ }} />);
    expect(wrapper.find('DropDown').length).toEqual(0);
    // Confirm dropdown exists when user is logged in
    wrapper = mount(<NavList menuOpen={false} dropDownMenu={false}
      dispatch={() => {} } user={{ id: 1 }} />);
    expect(wrapper.find('DropDown').length).toEqual(1);
  });
});
