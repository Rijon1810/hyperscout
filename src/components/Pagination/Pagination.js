import React, { useContext } from "react";
import "./Pagination.css";
import arrowLeft from "./images/arrow-left.png";
import arrowRight from "./images/arrow-right.png";
import numberIcon from "./images/number.png";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { GlobalContext } from "../../hooks/GlobalContext";

export const Pagination = () => {
  let isMobile = useDeviceDetect().isMobile;
  const { selectedTheme } = useContext(GlobalContext);
  const isDark = selectedTheme === "DARK";
  return (
    <div className={`pagination ${isMobile && "mobile-pagination"}`}>
      <div className="pagination-left">
        <img
          className="pagination-icon"
          src={arrowLeft}
          alt="left"
          style={{
            filter: isDark && "invert()",
          }}
        />
        <div
          className="pagination-text"
          style={{
            color: isDark && "#667085",
          }}
        >
          Previous
        </div>
      </div>
      <div className="pagination-page-numbers">
        <div className="page-number select-page">1</div>
        <div
          className="page-number"
          style={{
            color: isDark && "#667085",
          }}
        >
          2
        </div>
        <div
          className="page-number"
          style={{
            color: isDark && "#667085",
          }}
        >
          3
        </div>
        <img
          className="pagination-number-icon"
          src={numberIcon}
          alt="number"
          style={{
            filter: isDark && "invert()",
          }}
        />
        <div
          className="page-number"
          style={{
            color: isDark && "#667085",
          }}
        >
          8
        </div>
        <div
          className="page-number"
          style={{
            color: isDark && "#667085",
          }}
        >
          9
        </div>
        <div
          className="page-number"
          style={{
            color: isDark && "#667085",
          }}
        >
          10
        </div>
      </div>
      <div className="pagination-right">
        <div
          className="pagination-text"
          style={{
            color: isDark && "#667085",
          }}
        >
          Next
        </div>
        <img
          className="pagination-icon"
          src={arrowRight}
          alt="right"
          style={{
            filter: isDark && "invert()",
          }}
        />
      </div>
    </div>
  );
};
