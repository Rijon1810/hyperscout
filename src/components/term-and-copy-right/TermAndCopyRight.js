import React, { useContext } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";
import "./TermAndCopyRight.css";
import { TermsArea } from "./terms-area/TermsArea";

export const TermAndCopyRight = ({ isMobile }) => {
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div
      className={`term-and-copy-right ${
        isMobile && "mobile-term-and-copy-right"
      }`}
    >
      {isMobile && <TermsArea />}
      <div className="copy-right-area">
        <div
          className="copy-right-left"
          style={{
            color: isDark && "#637381",
          }}
        >
          {" "}
          &copy; Hypescout 2022.{" "}
        </div>
        <div className="copy-right-right"> All rights reserved</div>
      </div>
      {!isMobile && <TermsArea />}
    </div>
  );
};
