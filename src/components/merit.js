import React from 'react';
import { updateCharacter, fetchSingleCharacter } from '../actions/character';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { required, minValue1, maxValue5 } from '../validators';

export class AddMerit extends React.Component {
  state = {
    editing: false
  };

  onSubmit(values) {
    this.setState({
      editing: false
    });
    const { merits } = values;
    const meritList = [...this.props.body.merits, merits];
    const id = this.props.body.id;
    return this.props
      .dispatch(updateCharacter({ merits: meritList, id }))
      .then(() => {
        this.props.dispatch(fetchSingleCharacter(id));
      });
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      const text = `Click here to add a Merit`;
      return (
        <nav className="add-button" onClick={() => this.setEditing(true)}>
          <span style={{ color: 'white' }}>{text}</span>
        </nav>
      );
    }
    return (
      <form
        className="card merit-form"
        name="addMeritForm"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <fieldset className="merit-fieldset">
          <h3>Add Merit</h3>
          <div>
            <Field
              label="Name:"
              className="merit-input"
              component={Input}
              name="merits.name"
              type="text"
              validate={[required]}
              aria-label="merit name"
            />
          </div>
          <div>
            <Field
              label="Rating:"
              className="merit-input"
              name="merits.rating"
              component={Input}
              type="number"
              validate={[required, minValue1, maxValue5]}
              aria-label="merit rating"
            />
          </div>
          <div>
            <Field
              label="Description:"
              className="merit-input"
              name="merits.description"
              component={Input}
              type="text"
              aria-label="merit description"
            />
          </div>
          <section className="merit-buttons">
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Add
            </button>
            <button type="button" onClick={() => this.setEditing(false)}>
              Cancel
            </button>
          </section>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMeritForm',
  onSubmitSuccess: () => {}
})(AddMerit);
