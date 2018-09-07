import React from 'react';

import FieldInfo from './infoFields';

export default function InfoBlock(props) {
  const infoFields = props.field.map((field, index) => (
    <li key={index}>
      <FieldInfo {...field} />
    </li>
  ));
  return (
    <div className="infoblock-wrapper">
      <ul className="infoblock">{infoFields}</ul>
    </div>
  );
}
