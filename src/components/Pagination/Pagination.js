import React from "react";
import "./Pagination.css";
import arrowLeft from "./images/arrow-left.png";
import arrowRight from "./images/arrow-right.png";
import numberIcon from "./images/number.png";
import useDeviceDetect from "../../utils/useDeviceDetect";

export const Pagination = () => {
  let isMobile = useDeviceDetect().isMobile;
  return (
    <div className={`pagination ${isMobile && "mobile-pagination"}`}>
      <div className="pagination-left">
        <img className="pagination-icon" src={arrowLeft} alt="left" />
        <div className="pagination-text">Previous</div>
      </div>
      <div className="pagination-page-numbers">
        <div className="page-number select-page">1</div>
        <div className="page-number">2</div>
        <div className="page-number">3</div>
        <img className="pagination-number-icon" src={numberIcon} alt="number" />
        <div className="page-number">8</div>
        <div className="page-number">9</div>
        <div className="page-number">10</div>
      </div>
      <div className="pagination-right">
        <div className="pagination-text">Next</div>
        <img className="pagination-icon" src={arrowRight} alt="right" />
      </div>
    </div>
  );
};
