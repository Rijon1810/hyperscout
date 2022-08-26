import React, { useContext } from "react";
import { AboutCompany } from "../components/about-company/AboutCompany";
import { Advertiser } from "../components/advertiser-section/AdvertiserSection";
import { Influencer } from "../components/influencer/Influencer";
import { Navigation } from "../components/navigation/Navigation";
import { TermAndCopyRight } from "../components/term-and-copy-right/TermAndCopyRight";
import { GlobalContext } from "../hooks/GlobalContext";
import useDeviceDetect from "../utils/useDeviceDetect";
import "./Footer.css";

export const Footer = () => {
  let isMobile = useDeviceDetect().isMobile;
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div
      className={`footer ${isMobile && "mobile-footer"} ${
        isDark && "dark-footer"
      }`}
    >
      <div className="footer-top">
        <AboutCompany isMobile={isMobile} />
        {!isMobile ? (
          <>
            <Navigation isMobile={isMobile} />
            <Influencer isMobile={isMobile} />
            <Advertiser isMobile={isMobile} />
          </>
        ) : (
          <div className="footer-top-body">
            <div className="footer-top-left">
              <Navigation isMobile={isMobile} />
            </div>
            <div className="footer-top-right">
              <Influencer isMobile={isMobile} />
              <Advertiser isMobile={isMobile} />
            </div>
          </div>
        )}
      </div>

      <div className="footer-bottom">
        <TermAndCopyRight isMobile={isMobile} />
      </div>
    </div>
  );
};
