import React from "react";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="TopContainer">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-white text-center text-2xl font-bold mb-5 pt-10">
            Y/N's Profile
          </h1>
        </div>
      </div>
      <div className="ProfileInfo">
        <img src="" alt="Pfp" className="avatar" />
        <div className="profile-info">
          <h2>Name:</h2>
          <h3>Email:</h3>
          <p>About:</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
