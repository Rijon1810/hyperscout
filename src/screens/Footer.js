import React from "react";
import { AboutCompany } from "../components/about-company/AboutCompany";
import { Advertiser } from "../components/advertiser-section/AdvertiserSection";
import { Influencer } from "../components/influencer/Influencer";
import { Navigation } from "../components/navigation/Navigation";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <AboutCompany />
      <Navigation />
      <Influencer />
      <Advertiser />
    </div>
  );
};
