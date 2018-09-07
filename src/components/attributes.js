import React from 'react';

import './attribute.css';

export default function Attribute(props) {
  return (
    <div className="attribute">
      {props.text}
      <span>{props.value}</span>
    </div>
  );
}

Attribute.defaultProps = {
  text: '',
  value: 1
};
