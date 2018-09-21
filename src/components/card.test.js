import React from 'react';
import { shallow, mount } from 'enzyme';
import { Card } from './card';

describe('<Card />', () => {
  it('should render without crashing', () => {
    shallow(<Card />);
  });

  it('should render correctly when editing is true', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({
      editing: true
    });

    expect(wrapper.find('form').length).toEqual(1);
  });

  it('should set editing to true when clicked', () => {
    const wrapper = mount(<Card />);
    wrapper.setState({
      editing: false
    });

    const nav = wrapper.find('nav');
    nav.simulate('click');
    expect(wrapper.state('editing')).toEqual(true);
  });

  it('should dispatch updateCharacter when submitted', () => {
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = mount(
      <Card body={{}} val={'newThing'} path={['here']} dispatch={dispatch} />
    );
    wrapper.setState({
      editing: true
    });

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(wrapper.state('editing')).toEqual(false);
  });
});
