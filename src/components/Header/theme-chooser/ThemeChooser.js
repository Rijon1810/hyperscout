import React, { useContext } from "react";
import "./ThemeChooser.css";
import lightIcon from "../images/blue_light.png";
import darkIcon from "../images/blue_dark.png";
import systemIcon from "../images/system.png";
import { GlobalContext } from "../../../hooks/GlobalContext";
export default function ThemeChooser({ themeRef, isMobile }) {
  const { setShowThemeDropDown, setSelectedTheme } = useContext(GlobalContext);

  const handleSelectTheme = (type) => {
    setSelectedTheme(type);
    setShowThemeDropDown(false);
  };

  return (
    <div
      className={`theme-chooser ${isMobile && "theme-chooser-mobile"}`}
      ref={themeRef}
    >
      <div className="theme-item" onClick={() => handleSelectTheme("LIGHT")}>
        <img className="theme-icon" src={lightIcon} alt="light" />
        <div className="theme-item-text">Light</div>
      </div>
      <div className="theme-item" onClick={() => handleSelectTheme("DARK")}>
        <img className="theme-icon" src={darkIcon} alt="dark" />
        <div className="theme-item-text">Dark</div>
      </div>
      <div className="theme-item" onClick={() => handleSelectTheme("SYSTEM")}>
        <img className="theme-icon" src={systemIcon} alt="system" />
        <div className="theme-item-text">System</div>
      </div>
    </div>
  );
}
