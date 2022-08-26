import React, { useContext } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import "./Influencer.css";

export const Influencer = ({ isMobile }) => {
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div className={`influencer ${isMobile && "mobile-influencer"}`}>
      <div
        className="influencer-item influencer-title common-title"
        style={{
          color: isDark && "#FFFFFF",
        }}
      >
        Influencer
      </div>
      <div className="influencer-item">Join as Influencer</div>
      <div className="influencer-item">HypeSocial</div>
    </div>
  );
};
