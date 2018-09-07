import React from 'react';
import Skill from './skill';

export default function SkillBlock(props) {
  const skills = props.list.map((skill, index) => (
    <li key={index}>
      <Skill {...skill} />
    </li>
  ));
  return (
    <div>
      <h3>{props.title}</h3>
      <ul className="skillBlock">{skills}</ul>
    </div>
  );
}
