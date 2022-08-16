import React from "react";
import "./Header.css";
import lightLogo from "./images/light_logo.png";
import notificaton from "./images/notification.png";
import darkIcon from "./images/dark.png";
import navProfile from "./images/nav_profile.png";
import navMenu from "./images/nav_menu.png";
import { SizedBox } from "../sizedbox/sizedbox";
export const Header = () => {
  return (
    <div className="header">
      <div className="nav-bar">
        <div className="nav-left">
          <img className="light-logo" src={lightLogo} alt="light-logo" />
        </div>
        <div className="nav-right">
          <div className="nav-right-tools">
            <img className="notificaton" src={notificaton} alt="notificaton" />
            <img className="darkIcon" src={darkIcon} alt="darkIcon" />
            <img className="navProfile" src={navProfile} alt="navProfile" />
          </div>
          <SizedBox width={"20px"} />
          <img className="navMenu" src={navMenu} alt="navMenu" />
        </div>
      </div>
    </div>
  );
};
