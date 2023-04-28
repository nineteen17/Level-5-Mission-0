import React from "react";
import "./HomePage.scss"
import Header from "./Header";
import Home from "./Home/Home";
import Collection from "./Collection/Collection";
import Profile from "./Profile/Profile";
import { Routes, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="collection" element={<Collection />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      
    </div>
  );
};

export default HomePage;
