import React from "react";
import "./TermAndCopyRight.css";
import { TermsArea } from "./terms-area/TermsArea";

export const TermAndCopyRight = ({ isMobile }) => {
  return (
    <div
      className={`term-and-copy-right ${
        isMobile && "mobile-term-and-copy-right"
      }`}
    >
      {isMobile && <TermsArea />}
      <div className="copy-right-area">
        <div className="copy-right-left"> &copy; Hypescout 2022. </div>
        <div className="copy-right-right"> All rights reserved</div>
      </div>
      {!isMobile && <TermsArea />}
    </div>
  );
};
