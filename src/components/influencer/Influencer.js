import React from "react";
import "./Influencer.css";

export const Influencer = ({ isMobile }) => {
  return (
    <div className={`influencer ${isMobile && "mobile-influencer"}`}>
      <div className="influencer-item influencer-title">Influencer</div>
      <div className="influencer-item">Join as Influencer</div>
      <div className="influencer-item">HypeSocial</div>
    </div>
  );
};
