import React from 'react';
import { shallow } from 'enzyme';
import { AddMerit } from './merit';

describe('<AddMerit />', () => {
  it('should render without crashing', () => {
    shallow(<AddMerit />);
  });
});
