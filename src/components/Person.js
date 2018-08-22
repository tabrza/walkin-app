import React from 'react';

const person = props => (
  <div className="list-body content-container">
    <div className="list-item">
      <p className="list-item--message"><strong> { props.name } </strong></p>
      <p className="list-item--message"><strong> { props.time } </strong></p>
    </div>
    <div className="list-item__data">
      <p> { props.time } </p>
    </div>
  </div>
);

export default person;
