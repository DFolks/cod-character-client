import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchCharacterData, deleteCharacter } from '../actions/character';
import { Link } from 'react-router-dom';

import './dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCharacterData());
  }

  deleteChar(id) {
    this.props
      .dispatch(deleteCharacter(id))
      .then(() => this.props.dispatch(fetchCharacterData()));
  }

  render() {
    let characters = this.props.characterData;
    if (characters) {
      characters = this.props.characterData.map((character, index) => {
        return (
          <li key={index} className="characterItem card">
            <Link to={`/character/${character.id}`} className="charListName">
              <span>{character.name}</span>
            </Link>
            <span className="charListChronicle">{character.chronicle}</span>
            <button onClick={() => this.deleteChar(character.id)}>
              Delete
            </button>
          </li>
        );
      });
    }

    return (
      <div className="dashboard">
        <div className="CharacterList">
          <h2 className="list-title">Character List</h2>
          <ul>{characters}</ul>
        </div>
        <Link to={`/createChar`} className="newChar">
          Create New Character
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.name}`,
    characterData: state.characterData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

Dashboard.defaultProps = {
  characterData: []
};
