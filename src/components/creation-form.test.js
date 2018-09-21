import React from 'react';
import { shallow } from 'enzyme';
import { CharCreateForm } from './creation-form';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';

describe('<CharCreateForm />', () => {
  it('should render without crashing', () => {
    shallow(<CharCreateForm handleSubmit={() => {}} />);
  });
  // it('should change redirectToNewPage to true on submit', () => {
  //   const dispatch = jest.fn().mockImplementation(() => Promise.resolve());
  //   const store = configureStore([thunk])();
  //   const values = {
  //     name: 'test',
  //     intelligence: 1,
  //     wits: 1,
  //     resolve: 1,
  //     strength: 1,
  //     dexterity: 1,
  //     stamina: 1,
  //     presence: 1,
  //     manipulation: 1,
  //     composure: 1,
  //     academics: 1,
  //     computer: 1,
  //     crafts: 1,
  //     investigation: 1,
  //     medicine: 1,
  //     occult: 1,
  //     politics: 1,
  //     science: 1,
  //     athletics: 1,
  //     brawl: 1,
  //     drive: 1,
  //     firearms: 1,
  //     larceny: 1,
  //     stealth: 1,
  //     survival: 1,
  //     weaponry: 1,
  //     animalKen: 1,
  //     empathy: 1,
  //     expression: 1,
  //     intimidation: 1,
  //     persuasion: 1,
  //     socialize: 1,
  //     streetwise: 1,
  //     subterfuge: 1,
  //     size: 1,
  //     age: 1,
  //     player: 'test',
  //     virtue: 'test',
  //     vice: 'test',
  //     concept: 'test',
  //     chronicle: 'test',
  //     faction: 'test',
  //     group: 'test'
  //   };
  //   const handleSubmit = values => values;
  //   const wrapper = mount(
  //     <CharCreateForm
  //       dispatch={dispatch}
  //       values={values}
  //       handleSubmit={handleSubmit}
  //     />
  //   );
  //   wrapper.setState({
  //     redirectToNewPage: false
  //   });

  //   const form = wrapper.find('form');
  //   form.simulate('submit');
  //   expect(wrapper.state('redirectToNewPage')).toEqual(true);
  // });
});
