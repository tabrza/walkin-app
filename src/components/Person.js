import React from 'react';
import ProgressBar from './ProgressBar';

const person = props => (
  <div className="list-header">
    <div className="list-body">
      <div className="list-item">
        <p className=""><strong> { props.name } </strong></p>
        <p className=""><strong> { props.time } </strong></p>
        <div className="list-item__data">
          <ProgressBar time={props.time} />
        </div>
      </div>
    </div>
  </div>
);

export default person;
