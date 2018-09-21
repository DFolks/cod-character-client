import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './dashboard';

describe('<Dashboard />', () => {
  it('should render without crashing', () => {
    shallow(<Dashboard dispatch={() => {}} />);
  });
});
