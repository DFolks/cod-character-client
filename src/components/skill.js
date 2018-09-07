import React from 'react';

import './skill.css';

export default function Skill(props) {
  return (
    <div className="skill">
      {props.name}
      <span>{props.value}</span>
    </div>
  );
}

Skill.defaultProps = {
  name: '',
  value: 0
};
