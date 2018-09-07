import React from 'react';
import Arena from './arena';
import './createChar.css';
import SkillBlock from './skillBlock';
import InfoBlock from './infoBlock';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Welcome from './welcome';
import charList from './characterList';
import { connect } from 'react-redux';
// import MeritsandMisc from './meritBlock';
// import HealthandStats from './healthBlock';

class CreateCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    const arenas = this.state.character.arenas.map((arena, index) => (
      <li className="arena-wrapper" key={index}>
        <Arena {...arena} />
      </li>
    ));
    const skills = this.state.character.skills.map((skill, index) => (
      <li className="skills-wrapper" key={index}>
        <SkillBlock {...skill} />
      </li>
    ));
    const infos = this.state.character.charInfo.map((info, index) => (
      <li className="info-wrapper" key={index}>
        <InfoBlock {...info} />
      </li>
    ));
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/welcome" />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/characterList" component={charList} />
          <Route exact path="/:character">
            <div>
              <div className="infoBoard">
                <h2>Character Information</h2>
                <ul className="info">{infos}</ul>
              </div>
              <div className="attributeBoard">
                <h2>Attributes</h2>
                <ul className="arenas">{arenas}</ul>
              </div>
              <div className="lower-body">
                <div className="skillBoard">
                  <h2>Skills</h2>
                  <ul className="skills">{skills}</ul>
                </div>
                <div className="otherTraits">
                  <h2>Other Traits</h2>
                  <ul className="columns">
                    <li className="col1">
                      Merits
                      {/* <ul className="meritList">
                        {meritsandMisc}
                      </ul> */}
                    </li>
                    <li className="col2">
                      Health
                      {/* <ul>
                        {healthAndStats}
                      </ul> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.character
  };
}

export default connect(mapStateToProps)(CreateCharacter);
