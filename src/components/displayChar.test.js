import React from 'react';
import { shallow } from 'enzyme';
import { DisplayChar } from './displayChar';

describe('<DisplayChar />', () => {
  it('should render without crashing', () => {
    shallow(<DisplayChar match={{ params: { id: '' } }} dispatch={() => {}} />);
  });
});
