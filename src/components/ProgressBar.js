import React from 'react';

const progressBar = props => (
  <div className="progress-bar">
    <div className="progress" width={props.time} />
  </div>
);

export default progressBar;
