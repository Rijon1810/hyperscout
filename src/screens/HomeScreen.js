import React from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { Search } from "../components/search/Search";
import "./HomeScreen.css";
import { UsersProfile } from "./UsersProfile/UsersProfile";

export const HomeScreen = ({ isMobile }) => {
  return (
    <div className={`home-screen ${isMobile && "mobile-home-screen"}`}>
      <Search />
      <UsersProfile />
      <Pagination />
    </div>
  );
};
