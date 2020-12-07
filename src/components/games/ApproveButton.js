import React from "react";
import "./Game.css";
import approveImg from "../../assets/images/approve.png";

const ApproveButton = ({ handleApproveClick }) => {
  return (
    <div className="approve" onClick={handleApproveClick}>
      <img src={approveImg} alt="Approve Button" />
    </div>
  );
};

export default ApproveButton;
