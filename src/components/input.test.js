import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

describe('<Input />', () => {
  it('should render without crashing', () => {
    shallow(<Input meta={{ touched: false }} input={{ name: '' }} />);
  });
});
