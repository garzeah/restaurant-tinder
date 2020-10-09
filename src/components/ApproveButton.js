import React from 'react';
import './Game.css';

const ApproveButton = ({ handleApproveClick }) => {
  return (
    <div className="approve" onClick={handleApproveClick}>
      +
    </div>
  );
};

export default ApproveButton;