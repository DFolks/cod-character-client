import React from 'react';
import { shallow, mount } from 'enzyme';
import LandingPage from './landingPage';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';

describe('<LandingPage />', () => {
  it('should render without crashing', () => {
    shallow(<LandingPage />);
  });
  it('should render 6 sections', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find('section').length).toEqual(6);
  });
  it('should include a Link to login page', () => {
    const wrapper = mount(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    expect(wrapper.find(Link).props().to).toBe('/login');
  });
});
