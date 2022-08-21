import React from "react";
import facebookIcon from "../../common-images/facebook.png";
import instagramIcon from "../../common-images/instagram.png";
import linkedinIcon from "../../common-images/linkedin.png";
import twitterIcon from "../../common-images/twitter.png";
import "./SNSArea.css";

export const SNSArea = () => {
  return (
    <div className="sns-area">
      <img className="sns-icon" src={facebookIcon} alt="fb" />
      <img className="sns-icon" src={instagramIcon} alt="inst" />
      <img className="sns-icon" src={linkedinIcon} alt="lkdn" />
      <img className="sns-icon" src={twitterIcon} alt="twit" />
    </div>
  );
};
