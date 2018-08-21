import React from 'react';

const person = props => (
  <div className="list-body">
    <div className="list-item">
      <p className="list-item--message"> { props.name } </p>
      <p className="list-item--message"> { props.time } </p>
      <p className="list-item__data"> { props.time } </p>
    </div>
  </div>
);

export default person;
