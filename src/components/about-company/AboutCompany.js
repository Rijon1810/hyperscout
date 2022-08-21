import React from "react";
import "./AboutCompany.css";
import lightLogo from "../../common-images/light_logo.png";
import { SNSArea } from "../sns-area/SNSArea";

export const AboutCompany = () => {
  return (
    <div className="about-company">
      <img className="about-company-logo" src={lightLogo} alt="light-logo" />
      <div className="about-company-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum sed
        ultricies volutpat rhoncus faucibus sit.
      </div>
      <SNSArea />
    </div>
  );
};
