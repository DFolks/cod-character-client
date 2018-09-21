import React from 'react';
import { shallow } from 'enzyme';
import { CreateChar } from './createChar';

describe('<CreateChar />', () => {
  it('should render without crashing', () => {
    shallow(<CreateChar />);
  });
});
