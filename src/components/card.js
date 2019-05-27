import React from 'react';
import { updateCharacter, fetchSingleCharacter } from '../actions/character';
import { connect } from 'react-redux';

export class Card extends React.Component {
  state = {
    editing: false
  };

  /*Builds an object using the value and path props given 
  to be structured properly when passed into the dispatch
  later.
  */
  setVal = (body, path, val) => {
    if (path.length === 0) {
      return val;
    }
    return Object.assign({}, body, {
      [path[0]]: this.setVal(body[path[0]], path.slice(1), val)
    });
  };

  /*When the submit button is clicked change state.editing to 
  false and then add the new value to the correct property of 
  the object created by the recursive function above and then 
  dispatching an update to the database and refreshing the 
  information displayed on the screen.
  */
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      editing: false
    });

    const body = this.props.body;
    console.log(body);
    const val = this.inputValue.value;
    const path = this.props.path;
    const id = this.props.id;
    this.props
      .dispatch(updateCharacter(this.setVal(body, path, val)))
      .then(() => this.props.dispatch(fetchSingleCharacter(id)));
  };

  onClick = () => {
    this.setState({
      editing: true
    });
  };

  render() {
    if (this.state.editing) {
      return (
        <form className="card" onSubmit={this.onSubmit}>
          <label>{this.props.feature}:</label>
          <input
            defaultValue={this.props.charFeature}
            ref={input => (this.inputValue = input)}
            required
            aria-label={this.props.feature}
          />
          <button>Submit</button>
        </form>
      );
    } else {
      return (
        <nav className="card" onClick={this.onClick}>
          <span>{this.props.feature}:</span>
          <span>{this.props.charFeature}</span>
        </nav>
      );
    }
  }
}

export default connect()(Card);
