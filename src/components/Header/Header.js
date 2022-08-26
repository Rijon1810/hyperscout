import React, { useContext, useEffect, useRef } from "react";
import "./Header.css";
import lightLogo from "../../common-images/light_logo.png";
import darkLogo from "../../common-images/dark_logo.png";
import notificaton from "./images/notification.png";
import notificatonDark from "./images/notification_dark.png";
import lightIcon from "./images/blue_light.png";
import darkMoonIcon from "./images/dark_moon.png";
import systemIcon from "./images/system.png";
import navProfile from "./images/nav_profile.png";
import navMenu from "./images/nav_menu.png";
import ThemeChooser from "./theme-chooser/ThemeChooser";
import { GlobalContext } from "../../hooks/GlobalContext";

export const Header = ({ isMobile }) => {
  const ref = useRef();

  const { showThemeDropDown, setShowThemeDropDown, selectedTheme } =
    useContext(GlobalContext);

  const handleClick = (e) => {
    if (
      ref.current &&
      !ref.current.contains(e.target) &&
      e.target.className !== "darkIcon"
    ) {
      setShowThemeDropDown(false);
    }
  };

  let navLogo;
  let themeLogo;
  let background;
  let navMenuTextColor;
  let notificationIcon;
  const setPageData = () => {
    switch (selectedTheme) {
      case "SYSTEM": {
        navLogo = lightLogo;
        themeLogo = systemIcon;
        notificationIcon = notificaton;
        break;
      }

      case "LIGHT": {
        navLogo = lightLogo;
        themeLogo = lightIcon;
        notificationIcon = notificaton;
        break;
      }
      case "DARK": {
        navLogo = darkLogo;
        themeLogo = darkMoonIcon;
        background = "#17181B";
        navMenuTextColor = "#637381";
        notificationIcon = notificatonDark;
        break;
      }
      default:
        return "";
    }
  };

  setPageData();

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div
      className={`header ${isMobile && "mobile-header"}`}
      style={{
        background: background,
      }}
    >
      <div className="nav-bar">
        <div className="nav-left">
          <img className="light-logo" src={navLogo} alt="light-logo" />
        </div>
        <div className="nav-links">
          <div className="nav-links-item active">Dashboard</div>
          <div
            className="nav-links-item"
            style={{
              color: navMenuTextColor,
            }}
          >
            Campaign
          </div>
          <div
            className="nav-links-item"
            style={{
              color: navMenuTextColor,
            }}
          >
            Hypesocial
          </div>
          <div
            className="nav-links-item"
            style={{
              color: navMenuTextColor,
            }}
          >
            Insights
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-right-tools">
            <img
              className="notificaton"
              src={notificationIcon}
              alt="notificaton"
            />
            <img
              className="darkIcon"
              src={themeLogo}
              alt="darkIcon"
              onClick={() => setShowThemeDropDown(true)}
            />
            <div className="profile">
              <div
                className="user-name"
                style={{
                  color: navMenuTextColor,
                }}
              >
                Hi, Rakib
              </div>
              <img className="navProfile" src={navProfile} alt="navProfile" />
            </div>
          </div>
          {isMobile && <img className="navMenu" src={navMenu} alt="navMenu" />}
        </div>
        {showThemeDropDown && (
          <ThemeChooser themeRef={ref} isMobile={isMobile} />
        )}
      </div>
    </div>
  );
};
