import React, { useContext } from "react";
import "./Search.css";
import searchIcon from "./search.png";
import filterIcon from "./filter.png";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { GlobalContext } from "../../hooks/GlobalContext";
export const Search = () => {
  let isMobile = useDeviceDetect().isMobile;
  const { selectedTheme } = useContext(GlobalContext);
  return (
    <div
      className={`search ${isMobile && "mobile-search"}`}
      style={{
        background: selectedTheme === "DARK" && "#17181B",
      }}
    >
      <div
        className="users-count"
        style={{
          color: selectedTheme === "DARK" && "#FFFFFF",
        }}
      >
        Profile (100)
      </div>
      <div className="search-box">
        <img className="searchIcon" src={searchIcon} alt="searchIcon" />
        <input type="text" name="search" placeholder="Search Profile"></input>
      </div>
      <div className="filter">
        <img className="filterIcon" src={filterIcon} alt="filterIcon" />
        <div className="filter-text"> Advance Filter</div>
      </div>
    </div>
  );
};
