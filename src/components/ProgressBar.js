import React from 'react';
import PropTypes from 'prop-types';

const progressBar = (props) => {
  const progress = `${(((props.origTime - props.waitTime) / props.origTime) * 100)}%`;
  const progressCheck = ((props.waitTime / props.origTime) * 100);
  const progressColor = progressCheck < 50 ? '#EF9234' : '$blue';

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: progress, backgroundColor: progressColor }} />
    </div>
  );
};

// validating input
progressBar.propTypes = {
  waitTime: PropTypes.number.isRequired,
  origTime: PropTypes.number.isRequired
};

export default progressBar;
