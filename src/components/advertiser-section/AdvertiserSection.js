import React from "react";
import "./AdvertiserSection.css";

export const Advertiser = ({isMobile}) => {
  return (
    <div className={`advertiser-section ${isMobile && "mobile-advertiser-section"}`}>
      <div className="advertiser-section-item advertiser-section-title">Advertiser</div>
      <div className="advertiser-section-item">Join as Advertiser</div>
      <div className="advertiser-section-item">Hypelink</div>
    </div>
  );
};
