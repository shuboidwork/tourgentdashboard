import React from 'react';
import PropTypes from 'prop-types';
import './dev-in-progress.scss';

const DevInProgress = ({ title }) => {

  return (
    <div className="dip-cont">
      <div className="dip-image" />
      <div className="dip-texts">
        <div className="dip-title">{title}</div>
        <div className="dip-message">
          Development In Progress
        </div>
      </div>
    </div>
  );
};

DevInProgress.propTypes = {
  title: PropTypes.string,
};

DevInProgress.defaultProps = {
  title: 'Access Denied',
};

export default DevInProgress;
