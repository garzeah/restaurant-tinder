import React from 'react';
import './Game.css';
import rejectImg from '../assets/images/reject.png';

const RejectButton = ({ handleRejectClick }) => {
  return (
    <div className="reject" onClick={handleRejectClick}>
      <img
        src={rejectImg}
        alt="Reject Button"
      />
    </div>
  )
};

export default RejectButton;