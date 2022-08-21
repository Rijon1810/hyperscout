import React from "react";
import "./Header.css";
import lightLogo from "../../common-images/light_logo.png";
import notificaton from "./images/notification.png";
import darkIcon from "./images/dark.png";
import navProfile from "./images/nav_profile.png";
import navMenu from "./images/nav_menu.png";

export const Header = ({ isMobile }) => {
  return (
    <div className={`header ${isMobile && "mobile-header"}`}>
      <div className="nav-bar">
        <div className="nav-left">
          <img className="light-logo" src={lightLogo} alt="light-logo" />
        </div>
        <div className="nav-links">
          <div className="nav-links-item active">Dashboard</div>
          <div className="nav-links-item">Campaign</div>
          <div className="nav-links-item">Hypesocial</div>
          <div className="nav-links-item">Insights</div>
        </div>
        <div className="nav-right">
          <div className="nav-right-tools">
            <img className="notificaton" src={notificaton} alt="notificaton" />
            <img className="darkIcon" src={darkIcon} alt="darkIcon" />
            <div className="profile">
              <div className="user-name">Hi, Rakib</div>
              <img className="navProfile" src={navProfile} alt="navProfile" />
            </div>
          </div>
          {isMobile && <img className="navMenu" src={navMenu} alt="navMenu" />}
        </div>
      </div>
    </div>
  );
};
