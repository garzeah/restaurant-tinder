import React from "react";

import "./Game.css";
import approveImg from "../../assets/images/approve.png";
import rejectImg from "../../assets/images/reject.png";

const GameButton = ({ type, handleGameClick }) => {
  const renderGameButton = () => {
    if (type === "approve") {
      return (
        <div className="approve" onClick={handleGameClick}>
          <img src={approveImg} alt="Approve Button" />
        </div>
      );
    } else {
      return (
        <div className="reject" onClick={handleGameClick}>
          <img src={rejectImg} alt="Reject Button" />
        </div>
      );
    }
  };

  return renderGameButton();
};

export default GameButton;
