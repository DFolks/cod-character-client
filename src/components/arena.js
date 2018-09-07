import React from 'react';

import Attribute from './attributes';

export default function Arena(props) {
  const attributes = props.attributes.map((attribute, index) => (
    <li key={index}>
      <Attribute {...attribute} />
    </li>
  ));
  return (
    <div>
      <h3>{props.title}</h3>
      <ul className="arena">{attributes}</ul>
    </div>
  );
}
