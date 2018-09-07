import React from 'react';

import './infoFields.css';

export default function InfoField(props) {
  return (
    <div className="infoField">
      <h3>{props.text}</h3>
      <span>{props.value}</span>
    </div>
  );
}

InfoField.defaultProps = {
  text: '',
  value: ''
};
