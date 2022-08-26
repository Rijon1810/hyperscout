import React, { useContext } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import "./AdvertiserSection.css";

export const Advertiser = ({ isMobile }) => {
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div
      className={`advertiser-section ${
        isMobile && "mobile-advertiser-section"
      }`}
    >
      <div
        className="advertiser-section-item advertiser-section-title common-title"
        style={{
          color: isDark && "#FFFFFF",
        }}
      >
        Advertiser
      </div>
      <div className="advertiser-section-item">Join as Advertiser</div>
      <div className="advertiser-section-item">Hypelink</div>
    </div>
  );
};
