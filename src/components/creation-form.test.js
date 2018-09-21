import React from 'react';
import { shallow } from 'enzyme';
import CharCreateForm from './creation-form';

describe('<CharCreateForm />', () => {
  it('should render without crashing', () => {
    shallow(<CharCreateForm />);
  });
  it('should change redirectToNewPage to true on submit', () => {});
});
