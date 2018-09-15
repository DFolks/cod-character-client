import React from 'react';
import { updateCharacter, fetchSingleCharacter } from '../actions/character';
import { Field, reduxForm, reset } from 'redux-form';
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
        <div className="add-button" onClick={() => this.setEditing(true)}>
          <span style={{ color: 'white' }}>{text}</span>
        </div>
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
            <label htmlFor="merits.name">Name:</label>
            <Field
              className="merit-input"
              component={Input}
              name="merits.name"
              type="text"
              validate={[required]}
            />
          </div>
          <div>
            <label htmlFor="merits.rating">Rating:</label>
            <Field
              className="merit-input"
              name="merits.rating"
              component={Input}
              type="number"
              validate={[required, minValue1, maxValue5]}
            />
          </div>
          <div>
            <label htmlFor="merits.description">Description:</label>
            <Field
              className="merit-input"
              name="merits.description"
              component={Input}
              type="text"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={this.props.pristine || this.props.submitting}
            >
              Add
            </button>
            <button type="button" onClick={() => this.setEditing(false)}>
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({
  form: 'addMeritForm',
  onSubmitSuccess: () => {}
})(AddMerit);
