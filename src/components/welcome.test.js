import React from 'react';
import { shallow } from 'enzyme';
import { Welcome } from './welcome';

describe('<Welcome />', () => {
  it('should render without crashing', () => {
    shallow(<Welcome />);
  });
});
