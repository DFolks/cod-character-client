import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CharCreateForm from './creation-form';
import './createChar.css';

export function CreateChar(props) {
  return (
    <div className="character-creation">
      <Link to="/dashboard">Back to List</Link>
      <h2> Create Your CoD Character</h2>
      <CharCreateForm />
      <Link to="/dashboard">Back to List</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateChar);
