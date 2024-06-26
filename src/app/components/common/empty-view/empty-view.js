import React from 'react';
import PropTypes from 'prop-types';
import './empty-view.scss';

const EmptyView = ({
   text, supportingText
}) => {


  return (
    <div className="empv-container">
      <div className="empv-text">{text}</div>
      <div className="empv-supp-text">{supportingText}</div>
    </div>
  );
};

EmptyView.propTypes = {
  text: PropTypes.string,
  supportingText: PropTypes.string,
};
EmptyView.defaultProps = {
  text: '',
  supportingText: '',
};

export default EmptyView;
