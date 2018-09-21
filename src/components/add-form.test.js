import React from 'react';
import { shallow, mount } from 'enzyme';
import { AddForm } from './add-form';

describe('<AddForm />', () => {
  it('should render without crashing', () => {
    shallow(<AddForm />);
  });

  it('should render correctly when editing is false', () => {
    const wrapper = mount(<AddForm />);
    wrapper.setState({
      editing: false
    });

    expect(wrapper.find('.add-button').length).toEqual(1);
  });

  it('should return a form if editing is true', () => {
    const wrapper = mount(<AddForm />);
    wrapper.setState({
      editing: true
    });
    expect(wrapper.find('.add-form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
  });
  it('should return a form if editing is true', () => {
    const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = mount(<AddForm charFeature={[]} dispatch={dispatch} />);
    wrapper.setState({
      editing: true
    });

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(wrapper.state('editing')).toEqual(false);
  });
});
