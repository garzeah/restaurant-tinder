import React from 'react';
import './Game.css';

const RejectButton = ({ handleRejectClick }) => {
  return (
    <div className="reject" onClick={handleRejectClick}>
      -
    </div>
  )
};

export default RejectButton;