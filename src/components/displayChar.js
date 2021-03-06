import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchSingleCharacter, updateCharacter } from '../actions/character';
import { Link } from 'react-router-dom';
import './displayChar.css';
import Card from './card';
import AddForm from './add-form';
import AddMerit from './merit';

export class DisplayChar extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchSingleCharacter(id));
  }

  /*Delete the item clicked on from the database and refresh
   */
  deleteItem(i, path) {
    const id = this.props.character.id;
    if (path === 'aspirations') {
      this.props.character.aspirations = this.props.character.aspirations.filter(
        (aspiration, index) => index !== i
      );
    } else if (path === 'conditions') {
      this.props.character.conditions = this.props.character.conditions.filter(
        (condition, index) => index !== i
      );
    } else if (path === 'merits') {
      this.props.character.merits = this.props.character.merits.filter(
        (merit, index) => index !== i
      );
    }
    this.props
      .dispatch(updateCharacter(this.props.character))
      .then(() => this.props.dispatch(fetchSingleCharacter(id)));
  }

  render() {
    const char = this.props.character;

    //Map out the conditions array and display them individually
    const conditions = char.conditions.map((condition, index) => {
      let path = 'conditions';
      return (
        <li key={index} className="card">
          <span>{condition}</span>
          <button
            onClick={() => this.deleteItem(index, path)}
            className="display-delete"
          >
            Remove
          </button>
        </li>
      );
    });

    //Map out the merits array and display them individually
    const merits = char.merits.map((merit, index) => {
      let path = 'merits';
      return (
        <li key={index} className="card merit-card">
          <div className="merit-name-rating">
            <span className="merit-title">{merit.name}</span>
            <span className="merit-rating">Rating: {merit.rating}</span>
            <button
              onClick={() => this.deleteItem(index, path)}
              className="display-delete"
            >
              Remove
            </button>
          </div>
          <div className="merit-desc">
            <p>
              Effect:
              {merit.description}
            </p>
          </div>
        </li>
      );
    });

    //Map out the aspirations array and display them individually
    const aspirations = char.aspirations.map((aspiration, index) => {
      let path = 'aspirations';
      return (
        <li key={index} className="card">
          <span>{aspiration}</span>
          <button
            onClick={() => this.deleteItem(index, path)}
            className="display-delete"
          >
            Remove
          </button>
        </li>
      );
    });

    return (
      <div>
        <Link to="/dashboard">Back to List</Link>
        <div className="displayChar">
          <div className="CharacterDisplay">
            <h2 className="sheet-title">{`${char.name}'s Character Sheet`}</h2>
            <section className="CharInfo">
              <h3>BASIC INFORMATION:</h3>
              <div>
                <Card
                  feature={'Name'}
                  charFeature={char.name}
                  id={char.id}
                  body={char}
                  path={['name']}
                />
                <Card
                  feature={'Age'}
                  charFeature={char.age}
                  id={char.id}
                  body={char}
                  path={['age']}
                />
                <Card
                  feature={'Player'}
                  charFeature={char.player}
                  id={char.id}
                  body={char}
                  path={['player']}
                />
              </div>
              <div>
                <Card
                  feature={'Virtue'}
                  charFeature={char.virtue}
                  id={char.id}
                  body={char}
                  path={['virtue']}
                />
                <Card
                  feature={'Vice'}
                  charFeature={char.vice}
                  id={char.id}
                  body={char}
                  path={['vice']}
                />
                <Card
                  feature={'Concept'}
                  charFeature={char.concept}
                  id={char.id}
                  body={char}
                  path={['concept']}
                />
              </div>
              <div>
                <Card
                  feature={'Chronicle'}
                  charFeature={char.chronicle}
                  id={char.id}
                  body={char}
                  path={['chronicle']}
                />
                <Card
                  feature={'Faction'}
                  charFeature={char.faction}
                  id={char.id}
                  body={char}
                  path={['faction']}
                />
                <Card
                  feature={'Group'}
                  charFeature={char.group}
                  id={char.id}
                  body={char}
                  path={['group']}
                />
              </div>
            </section>
            <div className="Attributes">
              <section className="MentalAttr">
                <h3>MENTAL ATTRIBUTES:</h3>
                <Card
                  feature={'Intelligence'}
                  charFeature={char.intelligence}
                  id={char.id}
                  body={char}
                  path={['intelligence']}
                />
                <Card
                  feature={'Wits'}
                  charFeature={char.wits}
                  id={char.id}
                  body={char}
                  path={['wits']}
                />
                <Card
                  feature={'Resolve'}
                  charFeature={char.resolve}
                  id={char.id}
                  body={char}
                  path={['resolve']}
                />
              </section>
              <section className="PhysicalAttr">
                <h3>PHYSICAL ATTRIBUTES:</h3>
                <Card
                  feature={'Strength'}
                  charFeature={char.strength}
                  id={char.id}
                  body={char}
                  path={['strength']}
                />
                <Card
                  feature={'Dexterity'}
                  charFeature={char.dexterity}
                  id={char.id}
                  body={char}
                  path={['dexterity']}
                />
                <Card
                  feature={'Stamina'}
                  charFeature={char.stamina}
                  id={char.id}
                  body={char}
                  path={['stamina']}
                />
              </section>
              <section className="SocialAttr">
                <h3>SOCIAL ATTRIBUTES:</h3>
                <Card
                  feature={'Presence'}
                  charFeature={char.presence}
                  id={char.id}
                  body={char}
                  path={['presence']}
                />
                <Card
                  feature={'Manipulation'}
                  charFeature={char.manipulation}
                  id={char.id}
                  body={char}
                  path={['manipulation']}
                />
                <Card
                  feature={'Composure'}
                  charFeature={char.composure}
                  id={char.id}
                  body={char}
                  path={['composure']}
                />
              </section>
            </div>
            <div className="Skills">
              <section className="MentalSkills">
                <h3>MENTAL SKILLS:</h3>
                <Card
                  feature={'Academics'}
                  charFeature={char.academics}
                  id={char.id}
                  body={char}
                  path={['academics']}
                />
                <Card
                  feature={'Computer'}
                  charFeature={char.computers}
                  id={char.id}
                  body={char}
                  path={['computers']}
                />
                <Card
                  feature={'Crafts'}
                  charFeature={char.crafts}
                  id={char.id}
                  body={char}
                  path={['crafts']}
                />
                <Card
                  feature={'Investigation'}
                  charFeature={char.investigation}
                  id={char.id}
                  body={char}
                  path={['investigation']}
                />
                <Card
                  feature={'Medicine'}
                  charFeature={char.medicine}
                  id={char.id}
                  body={char}
                  path={['medicine']}
                />
                <Card
                  feature={'Occult'}
                  charFeature={char.occult}
                  id={char.id}
                  body={char}
                  path={['occult']}
                />
                <Card
                  feature={'Politics'}
                  charFeature={char.politics}
                  id={char.id}
                  body={char}
                  path={['politics']}
                />
                <Card
                  feature={'Science'}
                  charFeature={char.science}
                  id={char.id}
                  body={char}
                  path={['science']}
                />
              </section>
              <section className="PhysicalSkills">
                <h3>PHYSICAL SKILLS:</h3>
                <Card
                  feature={'Athletics'}
                  charFeature={char.athletics}
                  id={char.id}
                  body={char}
                  path={['athletics']}
                />
                <Card
                  feature={'Brawl'}
                  charFeature={char.brawl}
                  id={char.id}
                  body={char}
                  path={['brawl']}
                />
                <Card
                  feature={'Drive'}
                  charFeature={char.drive}
                  id={char.id}
                  body={char}
                  path={['drive']}
                />
                <Card
                  feature={'Firearms'}
                  charFeature={char.firearms}
                  id={char.id}
                  body={char}
                  path={['firearms']}
                />
                <Card
                  feature={'Larceny'}
                  charFeature={char.larceny}
                  id={char.id}
                  body={char}
                  path={['larceny']}
                />
                <Card
                  feature={'Stealth'}
                  charFeature={char.stealth}
                  id={char.id}
                  body={char}
                  path={['stealth']}
                />
                <Card
                  feature={'Survival'}
                  charFeature={char.survival}
                  id={char.id}
                  body={char}
                  path={['survival']}
                />
                <Card
                  feature={'Weaponry'}
                  charFeature={char.weaponry}
                  id={char.id}
                  body={char}
                  path={['weaponry']}
                />
              </section>
              <section className="SocialSkills">
                <h3>SOCIAL SKILLS:</h3>
                <Card
                  feature={'Animal Ken'}
                  charFeature={char.animalKen}
                  id={char.id}
                  body={char}
                  path={['animalKen']}
                />
                <Card
                  feature={'Empathy'}
                  charFeature={char.empathy}
                  id={char.id}
                  body={char}
                  path={['empathy']}
                />
                <Card
                  feature={'Expression'}
                  charFeature={char.expression}
                  id={char.id}
                  body={char}
                  path={['expression']}
                />
                <Card
                  feature={'Intimidation'}
                  charFeature={char.intimidation}
                  id={char.id}
                  body={char}
                  path={['intimidation']}
                />
                <Card
                  feature={'Persuasion'}
                  charFeature={char.persuasion}
                  id={char.id}
                  body={char}
                  path={['persuasion']}
                />
                <Card
                  feature={'Socialize'}
                  charFeature={char.socialize}
                  id={char.id}
                  body={char}
                  path={['socialize']}
                />
                <Card
                  feature={'Streetwise'}
                  charFeature={char.streetwise}
                  id={char.id}
                  body={char}
                  path={['streetwise']}
                />
                <Card
                  feature={'Subterfuge'}
                  charFeature={char.subterfuge}
                  id={char.id}
                  body={char}
                  path={['subterfuge']}
                />
              </section>
            </div>
            <section className="CombatBlock">
              <h3>COMBAT STATS:</h3>
              <div className="card">
                Size: <span>{char.size}</span>
              </div>
              <div className="card">
                Speed: <span>{char.speed}</span>
              </div>
              <div className="card">
                Defense: <span>{char.defense}</span>
              </div>
              <Card
                feature={'Armor'}
                charFeature={char.armor}
                id={char.id}
                body={char}
                path={['armor']}
              />
              <div className="card">
                Initiative Mod: <span>{char.initiativeMod}</span>
              </div>
              <Card
                feature={'Beats'}
                charFeature={char.beats}
                id={char.id}
                body={char}
                path={['beats']}
              />
              <Card
                feature={'Experience'}
                charFeature={char.experience}
                id={char.id}
                body={char}
                path={['experience']}
              />
            </section>
            <h3>STATUSES:</h3>
            <section className="Health">
              <div className="card">
                Max Health: <span>{char.health.max}</span>
              </div>
              <div className="Damage">
                <Card
                  feature={'Bashing'}
                  charFeature={char.health.damage.bashing}
                  id={char.id}
                  body={char}
                  path={['health', 'bashing']}
                />
                <Card
                  feature={'Lethal'}
                  charFeature={char.health.damage.lethal}
                  id={char.id}
                  body={char}
                  path={['health', 'lethal']}
                />
                <Card
                  feature={'Aggravated'}
                  charFeature={char.health.damage.aggravated}
                  id={char.id}
                  body={char}
                  path={['health', 'damage', 'aggravated']}
                />
              </div>
            </section>
            <section className="Willpower">
              <div className="card">
                Max Willpower:
                <span>{char.willpower.max}</span>
              </div>
              <Card
                feature={'Spent Willpower'}
                charFeature={char.willpower.spent}
                id={char.id}
                body={char}
                path={['willpower', 'spent']}
              />
            </section>
            <section className="Integrity">
              <Card
                feature={'Integrity'}
                charFeature={char.integrity}
                id={char.id}
                body={char}
                path={['integrity']}
              />
            </section>
            <section className="Conditions">
              <h3>CONDITIONS:</h3>
              <ul className="conditionList">
                {conditions}
                <li>
                  <AddForm
                    type="condition"
                    feature={'Condition'}
                    charFeature={char.conditions}
                    id={char.id}
                    body={char}
                    path={'conditions'}
                  />
                </li>
              </ul>
            </section>
            <section className="Aspirations">
              <h3>ASPIRATIONS:</h3>
              <ul className="aspirationList">
                {aspirations}
                <li>
                  <AddForm
                    type="aspiration"
                    feature={'Aspiration'}
                    charFeature={char.aspirations}
                    id={char.id}
                    body={char}
                    path={['aspirations']}
                  />
                </li>
              </ul>
            </section>
            <section className="Merits">
              <h3>MERITS:</h3>
              <ul className="meritList">
                {merits}
                <li>
                  <AddMerit
                    type="merit"
                    feature={'Merit'}
                    charFeature={char.merits}
                    id={char.id}
                    body={char}
                    path={['merits']}
                  />
                </li>
              </ul>
            </section>
          </div>
        </div>
        <Link to="/dashboard">Back to List</Link>
      </div>
    );
  }
}

DisplayChar.defaultProps = {
  character: {
    health: {
      max: 0,
      damage: {
        bashing: 0,
        lethal: 0,
        aggravated: 0
      }
    },
    willpower: {
      max: 0,
      spent: 0
    },
    conditions: [],
    aspirations: [],
    merits: [
      {
        name: '',
        rating: '',
        description: ''
      }
    ]
  }
};

const mapStateToProps = state => {
  return {
    id: state.characterData.data,
    character: state.characterData.character,
    editing: state.editing
  };
};

export default requiresLogin()(connect(mapStateToProps)(DisplayChar));
