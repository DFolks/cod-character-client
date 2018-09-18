import React from 'react';
import { connect } from 'react-redux';
import { updateCharacter, fetchSingleCharacter } from '../actions/character';

import './add-form.css';

export class AddForm extends React.Component {
  state = {
    editing: false
  };

  /*When the submit button is clicked change state.editing to 
  false and then add the new value to the correct property of 
  the object before dispatching an update to the database and 
  refreshing the information displayed on the screen.
  */
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      editing: false
    });
    const val = this.textInput.value;
    const path = this.props.path;
    const id = this.props.id;
    const charFeat = [...this.props.charFeature, val];
    this.props
      .dispatch(updateCharacter({ [path]: charFeat, id }))
      .then(() => this.props.dispatch(fetchSingleCharacter(id)));
  };

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      const text = `Click here to add ${this.props.type}`;
      return (
        <div className="add-button" onClick={() => this.setEditing(true)}>
          <span style={{ color: 'white' }}>
            {text}
            ...
          </span>
        </div>
      );
    }
    const label = `Enter a ${this.props.type}`;
    return (
      <form className="card add-form" onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          ref={input => (this.textInput = input)}
          aria-label={label}
        />
        <button>Add</button>
        <button type="button" onClick={() => this.setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
}

export default connect()(AddForm);
