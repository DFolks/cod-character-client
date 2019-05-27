import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { createCharacter } from '../actions/character';
import Input from './input';
import {
  required,
  minValue1,
  maxValue5,
  minValue0,
  maxValue6,
  minValue4
} from '../validators';
import { Redirect } from 'react-router-dom';

export class CharCreateForm extends React.Component {
  state = {
    redirectToNewPage: false
  };

  onSubmit(values) {
    const {
      name,
      intelligence,
      wits,
      resolve,
      strength,
      dexterity,
      stamina,
      presence,
      manipulation,
      composure,
      academics,
      computer,
      crafts,
      investigation,
      medicine,
      occult,
      politics,
      science,
      athletics,
      brawl,
      drive,
      firearms,
      larceny,
      stealth,
      survival,
      weaponry,
      animalKen,
      empathy,
      expression,
      intimidation,
      persuasion,
      socialize,
      streetwise,
      subterfuge,
      size,
      age,
      player,
      virtue,
      vice,
      concept,
      chronicle,
      faction,
      group
    } = values;
    const character = {
      name,
      attributes: {
        mental: {
          intelligence,
          wits,
          resolve
        },
        physical: {
          strength,
          dexterity,
          stamina
        },
        social: {
          presence,
          manipulation,
          composure
        }
      },
      skills: {
        mental: {
          academics,
          computer,
          crafts,
          investigation,
          medicine,
          occult,
          politics,
          science
        },
        physical: {
          athletics,
          brawl,
          drive,
          firearms,
          larceny,
          stealth,
          survival,
          weaponry
        },
        social: {
          animalKen,
          empathy,
          expression,
          intimidation,
          persuasion,
          socialize,
          streetwise,
          subterfuge
        }
      },
      size,
      age,
      player,
      virtue,
      vice,
      concept,
      chronicle,
      faction,
      group
    };
    return this.props.dispatch(createCharacter(character)).then(() => {
      this.setState({ redirectToNewPage: true });
    });
  }

  render() {
    if (this.state.redirectToNewPage) {
      this.setState({ redirectToNewPage: false });
      return <Redirect to="/dashboard" />;
    }
    return (
      <form
        className="character-creation-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset className="info">
          <legend>Character Information</legend>
          <div>
            <Field
              label="Name"
              component={Input}
              type="text"
              name="name"
              validate={[required]}
              aria-label="character name"
            />
          </div>
          <div>
            <Field
              component={Input}
              label="Age"
              type="number"
              name="age"
              aria-label="character age"
            />
          </div>
          <div>
            <Field
              label="Virtue"
              component={Input}
              type="text"
              name="virtue"
              aria-label="character virtue"
            />
          </div>
          <div>
            <Field
              label="Vice"
              component={Input}
              type="text"
              name="vice"
              aria-label="character vice"
            />
          </div>
          <div>
            <Field
              label="Concept"
              component={Input}
              type="text"
              name="concept"
              aria-label="character concept"
            />
          </div>
          <div>
            <Field
              label="Chronicle"
              component={Input}
              type="text"
              name="chronicle"
              aria-label="chronicle the character is part of"
            />
          </div>
          <div>
            <Field
              label="Faction"
              component={Input}
              type="text"
              name="faction"
              aria-label="faction the character belongs to"
            />
          </div>
          <div>
            <Field label="Group" component={Input} type="text" name="group" />
          </div>
        </fieldset>
        <fieldset className="attr">
          <legend>Attributes</legend>
          <p>
            Instructions: Assign priority to groups (Physical, Mental, or
            Social). Primary will recieve 5 additional points to distribute.
            Secondary will recieve 4 additional points. And Tertiary will
            recieve 3 additional points.
          </p>
          <section>
            <h2>Mental</h2>
            <div>
              <Field
                label="Intelligence"
                component={Input}
                type="number"
                name="intelligence"
                validate={[minValue1, maxValue5]}
                aria-label="Intelligence attribute"
              />
            </div>
            <div>
              <Field
                label="Wits"
                component={Input}
                type="number"
                name="wits"
                validate={[minValue1, maxValue5]}
                aria-label="wits attribute"
              />
            </div>
            <div>
              <Field
                label="Resolve"
                component={Input}
                type="number"
                name="resolve"
                validate={[minValue1, maxValue5]}
                aria-label="resolve attribute"
              />
            </div>
          </section>
          <section>
            <h2>Physical</h2>
            <div>
              <Field
                label="Strength"
                component={Input}
                type="number"
                name="strength"
                validate={[minValue1, maxValue5]}
                aria-label="strength attribute"
              />
            </div>
            <div>
              <Field
                label="Dexterity"
                component={Input}
                type="number"
                name="dexterity"
                validate={[minValue1, maxValue5]}
                aria-label="dexterity attribute"
              />
            </div>
            <div>
              <Field
                label="Stamina"
                component={Input}
                type="number"
                name="stamina"
                validate={[minValue1, maxValue5]}
                aria-label="stamina attribute"
              />
            </div>
          </section>
          <section>
            <h2>Social</h2>
            <div>
              <Field
                label="Presence"
                component={Input}
                type="number"
                name="presence"
                validate={[minValue1, maxValue5]}
                aria-label="presence attribute"
              />
            </div>
            <div>
              <Field
                label="Manipulation"
                component={Input}
                type="number"
                name="manipulation"
                validate={[minValue1, maxValue5]}
                aria-label="manipulation attribute"
              />
            </div>
            <div>
              <Field
                label="Composure"
                component={Input}
                type="number"
                name="composure"
                validate={[minValue1, maxValue5]}
                aria-label="composure attribute"
              />
            </div>
          </section>
        </fieldset>
        <fieldset className="skills">
          <legend>Skills</legend>
          <p>
            Instructions: Assign priority to groups (Physical, Mental, or
            Social). Primary will recieve 11 points to distribute. Secondary
            will recieve 7 points. And Tertiary will recieve 4 points.
          </p>
          <section>
            <h2>Mental</h2>
            <div>
              <Field
                label="Academics"
                component={Input}
                type="number"
                name="academics"
                validate={[minValue0, maxValue5]}
                aria-label="academics skill"
              />
            </div>
            <div>
              <Field
                label="Computer"
                component={Input}
                type="number"
                name="computer"
                validate={[minValue0, maxValue5]}
                aria-label="computer skill"
              />
            </div>
            <div>
              <Field
                label="Crafts"
                component={Input}
                type="number"
                name="crafts"
                validate={[minValue0, maxValue5]}
                aria-label="crafts skill"
              />
            </div>
            <div>
              <Field
                label="Investigation"
                component={Input}
                type="number"
                name="investigation"
                validate={[minValue0, maxValue5]}
                aria-label="investigation skill"
              />
            </div>
            <div>
              <Field
                label="Medicine"
                component={Input}
                type="number"
                name="medicine"
                validate={[minValue0, maxValue5]}
                aria-label="medicine skill"
              />
            </div>
            <div>
              <Field
                label="Occult"
                component={Input}
                type="number"
                name="occult"
                validate={[minValue0, maxValue5]}
                aria-label="occult skill"
              />
            </div>
            <div>
              <Field
                label="Politics"
                component={Input}
                type="number"
                name="politics"
                validate={[minValue0, maxValue5]}
                aria-label="politics skill"
              />
            </div>
            <div>
              <Field
                label="Science"
                component={Input}
                type="number"
                name="science"
                validate={[minValue0, maxValue5]}
                aria-label="science skill"
              />
            </div>
          </section>
          <section>
            <h2>Physical</h2>
            <div>
              <Field
                label="Athletics"
                component={Input}
                type="number"
                name="athletics"
                validate={[minValue0, maxValue5]}
                aria-label="athletics skill"
              />
            </div>
            <div>
              <Field
                label="Brawl"
                component={Input}
                type="number"
                name="brawl"
                validate={[minValue0, maxValue5]}
                aria-label="brawl skill"
              />
            </div>
            <div>
              <Field
                label="Drive"
                component={Input}
                type="number"
                name="drive"
                validate={[minValue0, maxValue5]}
                aria-label="drive skill"
              />
            </div>
            <div>
              <Field
                label="Firearms"
                component={Input}
                type="number"
                name="firearms"
                validate={[minValue0, maxValue5]}
                aria-label="firearms skill"
              />
            </div>
            <div>
              <Field
                label="Larceny"
                component={Input}
                type="number"
                name="larceny"
                validate={[minValue0, maxValue5]}
                aria-label="larceny skill"
              />
            </div>
            <div>
              <Field
                label="Stealth"
                component={Input}
                type="number"
                name="stealth"
                validate={[minValue0, maxValue5]}
                aria-label="stealth skill"
              />
            </div>
            <div>
              <Field
                label="Survival"
                component={Input}
                type="number"
                name="survival"
                validate={[minValue0, maxValue5]}
                aria-label="survival skill"
              />
            </div>
            <div>
              <Field
                label="Weaponry"
                component={Input}
                type="number"
                name="weaponry"
                validate={[minValue0, maxValue5]}
                aria-label="weaponry skill"
              />
            </div>
          </section>
          <section>
            <h2>Social</h2>
            <div className="first-item">
              <Field
                label="Animal Ken"
                component={Input}
                type="number"
                name="animalKen"
                validate={[minValue0, maxValue5]}
                aria-label="Animal Ken skill"
              />
            </div>
            <div>
              <Field
                label="Empathy"
                component={Input}
                type="number"
                name="empathy"
                validate={[minValue0, maxValue5]}
                aria-label="empathy skill"
              />
            </div>
            <div>
              <Field
                label="Expression"
                component={Input}
                type="number"
                name="expression"
                validate={[minValue0, maxValue5]}
                aria-label="expression skill"
              />
            </div>
            <div>
              <Field
                label="Intimidation"
                component={Input}
                type="number"
                name="intimidation"
                validate={[minValue0, maxValue5]}
                aria-label="intimidation skill"
              />
            </div>
            <div>
              <Field
                label="Persuasion"
                component={Input}
                type="number"
                name="persuasion"
                validate={[minValue0, maxValue5]}
                aria-label="persuasion skill"
              />
            </div>
            <div>
              <Field
                label="Socialize"
                component={Input}
                type="number"
                name="socialize"
                validate={[minValue0, maxValue5]}
                aria-label="socialize skill"
              />
            </div>
            <div>
              <Field
                label="Streetwise"
                component={Input}
                type="number"
                name="streetwise"
                validate={[minValue0, maxValue5]}
                aria-label="streetwise skill"
              />
            </div>
            <div>
              <Field
                label="Subterfuge"
                component={Input}
                type="number"
                name="subterfuge"
                validate={[minValue0, maxValue5]}
                aria-label="subterfuge skill"
              />
            </div>
          </section>
        </fieldset>
        <fieldset className="combat">
          <legend>Combat Block</legend>
          <section>
            <Field
              label="Size"
              component={Input}
              type="number"
              name="size"
              placeholder="5"
              validate={[maxValue6, minValue4]}
              aria-label="character size"
            />
          </section>
        </fieldset>
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
          className="save"
        >
          Save
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'character-creation',
  initialValues: {
    name: "Character's Name",
    intelligence: 1,
    wits: 1,
    resolve: 1,
    strength: 1,
    dexterity: 1,
    stamina: 1,
    presence: 1,
    manipulation: 1,
    composure: 1,
    academics: 0,
    computer: 0,
    crafts: 0,
    investigation: 0,
    medicine: 0,
    occult: 0,
    politics: 0,
    science: 0,
    athletics: 0,
    brawl: 0,
    drive: 0,
    firearms: 0,
    larceny: 0,
    stealth: 0,
    survival: 0,
    weaponry: 0,
    animalKen: 0,
    empathy: 0,
    expression: 0,
    intimidation: 0,
    persuasion: 0,
    socialize: 0,
    streetwise: 0,
    subterfuge: 0,
    size: 5
  },
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('character-creation', Object.keys(errors)[0]))
})(CharCreateForm);
