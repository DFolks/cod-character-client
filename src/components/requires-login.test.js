import React from 'react';
import { shallow } from 'enzyme';
import RequiresLogin from './requires-login';

describe('<RequiresLogin />', () => {
  it('should render without crashing', () => {
    shallow(<RequiresLogin />);
  });
});
