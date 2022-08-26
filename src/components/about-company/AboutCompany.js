import React, { useContext } from "react";
import "./AboutCompany.css";
import lightLogo from "../../common-images/light_logo.png";
import darkLogo from "../../common-images/dark_logo.png";
import { SNSArea } from "../sns-area/SNSArea";
import { GlobalContext } from "../../hooks/GlobalContext";

export const AboutCompany = ({ isMobile }) => {
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div className={`about-company ${isMobile && "mobile-about-company"}`}>
      <img
        className="about-company-logo"
        src={isDark ? darkLogo : lightLogo}
        alt="light-logo"
      />
      <div className="about-company-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed
        ultricies volutpat rhoncus faucibus sit.
      </div>
      <SNSArea />
    </div>
  );
};
