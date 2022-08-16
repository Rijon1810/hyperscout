import React from "react";
import { Search } from "../components/search/Search";
import "./HomeScreen.css";
export const HomeScreen = ({ isMobile }) => {
  return (
    <div className={`home-screen ${isMobile && "mobile-home-screen"}`}>
      <Search />
    </div>
  );
};
