import React from "react";
import addressIcon from "./images/location.png";
import clockIcon from "./images/clock.png";

import "./SingleProfile.css";
import { SNSArea } from "../sns-area/SNSArea";

export const SingleProfile = ({ item, index }) => {
  let { address, categories, followers, gender, imageUrl, joined, name } = item;

  return (
    <div className="single-profile">
      <div className="profile-image">
        {imageUrl && <img className="image" src={imageUrl} alt="profile" />}
      </div>
      <div className="profile-user-name">{name}</div>
      <div className="address-area">
        <img className="address-icon" src={addressIcon} alt="profile" />
        <div className="address-text">{address}</div>
      </div>
      <div className="join-area">
        <img className="join-icon" src={clockIcon} alt="clock" />
        <div className="join-text">{joined}</div>
      </div>
      <SNSArea />
      <div className="about-area">
        <div className="about-item">
          <div className="about-top">{followers}</div>
          <div className="about-bottom">Followers</div>
        </div>
        <div className="about-item">
          <div className="about-top">{categories}</div>
          <div className="about-bottom">Categories</div>
        </div>
        <div className="about-item">
          <div className="about-top">{gender}</div>
          <div className="about-bottom">Gender</div>
        </div>
      </div>
    </div>
  );
};
