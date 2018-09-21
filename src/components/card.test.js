import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './card';

describe('<Card />', () => {
  it('should render without crashing', () => {
    shallow(<Card />);
  });
});
