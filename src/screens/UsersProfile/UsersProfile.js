import React from "react";
import { SingleProfile } from "../../components/single-profile/SingleProfile";
import { usersData } from "../../data/User.data";
import './UsersProfile.css';

export const UsersProfile = () => {
  return (
    <div className="users-profile">
      {usersData.map((item, index) => {
        return <SingleProfile item={item}  key={index} />;
      })}
    </div>
  );
};
