import React from 'react';
import { updateCharacter, fetchSingleCharacter } from '../actions/character';
import { connect } from 'react-redux';

export class Card extends React.Component {
  state = {
    editing: false
  };

  setVal = (body, path, val) => {
    if (path.length === 0) {
      return val;
    }
    return Object.assign({}, body, {
      [path[0]]: this.setVal(body[path[0]], path.slice(1), val)
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState({
      editing: false
    });

    const body = this.props.body;
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
          />
          <button>Submit</button>
        </form>
      );
    } else {
      return (
        <div className="card" onClick={this.onClick}>
          {this.props.feature}:<span>{this.props.charFeature}</span>
        </div>
      );
    }
  }
}

export default connect()(Card);
