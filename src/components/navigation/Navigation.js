import React from "react";
import "./Navigation.css";

export const Navigation = ({ isMobile }) => {
  return (
    <div className={`navigation ${isMobile && "mobile-navigation"}`}>
      <div className="navigation-item navigation-title">Company</div>
      <div className="navigation-item">About Us</div>
      <div className="navigation-item">Careers</div>
      <div className="navigation-item">Case Study</div>
      <div className="navigation-item">Blog</div>
      <div className="navigation-item">Contact Us</div>
    </div>
  );
};
