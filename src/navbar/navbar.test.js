import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavBar from './NavBar';
import NavList from './NavList';
import NavItem from './NavItem';
import { Context } from '../context/Context';


describe('Navbar Module', () => {
  configure({ adapter: new Adapter() });
  it('renders without crashing', () => {
    const wrapper = mount(<NavBar/>, {
      wrappingComponent: Context.Provider,
      wrappingComponentProps: {
        value: {
          menuOpen: false, dispatch: () => {}, user: { id: 1, email: '' }, dropDownMenu: false
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

  /*
   *it('renders without crashing', () => {
   *const div = document.createElement('div');
   *const menu = false;
   *const dropDown = false;
   *const element = getElementWithContext({
   *  value: {
   *    menuOpen: menu,
   *    dispatch: () => !menu,
   *    user: { id: 1, email: '' },
   *    dropDownMenu: dropDown
   *  }
   *}, <NavBar/>);
   *const navbar = renderer.create(element);
   *ReactDOM.render(navbar, div);
   *ReactDOM.unmountComponentAtNode(div);
   *});
   */
});
