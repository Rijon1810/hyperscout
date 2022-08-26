import React, { useContext } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import "./Navigation.css";

export const Navigation = ({ isMobile }) => {
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";

  return (
    <div className={`navigation ${isMobile && "mobile-navigation"}`}>
      <div
        className="navigation-item navigation-title"
        style={{
          color: isDark && "#FFFFFF",
        }}
      >
        Company
      </div>
      <div className="navigation-item">About Us</div>
      <div className="navigation-item">Careers</div>
      <div className="navigation-item">Case Study</div>
      <div className="navigation-item">Blog</div>
      <div className="navigation-item">Contact Us</div>
    </div>
  );
};
