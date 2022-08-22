import React from "react";
import { SingleProfile } from "../../components/single-profile/SingleProfile";
import { usersData } from "../../data/User.data";
import useDeviceDetect from "../../utils/useDeviceDetect";
import "./UsersProfile.css";

export const UsersProfile = () => {
  let isMobile = useDeviceDetect().isMobile;
  return (
    <div className={`users-profile ${isMobile && "mobile-users-profile"}`}>
      {usersData.map((item, index) => {
        return <SingleProfile item={item} key={index} />;
      })}
    </div>
  );
};
