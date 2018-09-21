import React from 'react';
import { Link } from 'react-router-dom';

import './landingPage.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <aside className="landingPage">
        <section>
          <h2 className="landingPage-title">Purpose</h2>
          <p className="card">
            Hello and welcome to Chronicles of Darkness Second Edition Character
            Management. This application was created to help players of
            Chronicles of Darkness be able to create, edit, and store their
            characters for this roleplaying game.
          </p>
        </section>
        <section>
          <h2 className="landingPage-title">Login/Register</h2>
          <p className="card">
            When you click the link at the bottom you'll be taken to a page that
            allows you to login with an account if you already have one, or
            register to create one by clicking on the link at the bottom that
            says 'Click Here to Register'. Registration asks you for your name,
            a username, and to create and confirm a password.
            <br />
            <br />
            For demo purposes you can use username "DemoUser" with password
            "password".
          </p>
        </section>
        <section>
          <h2 className="landingPage-title">The Character List Page Use</h2>
          <p className="card">
            Upon logging in, you'll be taken to a page that lists your
            characters you already have and allows you to create new ones. You
            can click on the name of your character to be taken to it's
            character sheet, click the delete button to permanently remove the
            character, or click the 'Create New Character' link to be taken to
            the form to generate a new character.
          </p>
        </section>
        <section>
          <h2 className="landingPage-title">The Creation Form Use</h2>
          <p className="card">
            On this page, you'll find a form that allows you to enter
            information about your character you wish to create. Some fields
            from the character sheet are intentionally left out either because
            they start with no value, or will be generated automatically based
            on the stats selected during character creation.
          </p>
        </section>
        <section>
          <h2 className="landingPage-title">The Character Sheet Use</h2>
          <p className="card">
            On this page your character's information will be displayed. The
            game's dots have been converted to the number values they represent
            for ease of use. This page displays all the information for your
            character's mechanics and basic information. From it you can click
            on any of the fields that should be able to change* and edit the
            values directly.
            <br />
            <br />
            There are some entries such as Merits, Aspirations, and Conditions
            that allow you to click on a link to open a form for adding them to
            your character sheet. Aspirations and Conditions are
            straight-forward and just display the text put into the form. The
            Merits form allows you to enter a name of the merit, it's rating, as
            well as a description of what it does. All of these fields can be
            added and removed intuitively through the user interface.
            <br />
            <br />
            *There are some (i.e. size) that don't change in the course of a
            usual game, and some (i.e. max health, initiative, speed, and
            defense) that are generated automatically based on the values of
            other stats.
          </p>
        </section>
        <section>
          <Link to={`/login`} className="continue">
            Continue to Login/Registration
          </Link>
        </section>
      </aside>
    );
  }
}
