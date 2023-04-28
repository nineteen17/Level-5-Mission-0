import React, { useState } from "react";
// FaHamburger is a hamburger icon from react-icons/fa ?
import { FaBars } from "react-icons/fa";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { RiCameraLensFill } from "react-icons/ri";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  };
  const handleCollection = () => {
    navigate("/collection");
  };

  const handleAuth = () => {
    navigate("/auth");
  };
  // const handleProfile = () => {
  //   navigate("/profile");
  // };

  return (
    <div className="HomePage__Header">
      <div className="Header__LContainer">
        <div className="LContainer__Item1">
          <RiCameraLensFill size={40} />
        </div>
        <div className="LContainer__Item2">Image Searcher</div>
        <FaBars className="LContainer__FaBars" onClick={toggleMenu} size={35} />
      </div>
      {isMenuOpen && (
        <div className="Header__Mobile">
          <div className="Item1" onClick={handleHome}>Home</div>
          <div className="Item2" onClick={handleCollection}>Collection</div>
          <div className="Item3" onClick={handleAuth}>Login</div>
          <div className="Item4" onClick={handleAuth}>Register</div>
        </div>
      )}
      <div className="Header__RContainer">
        <div className="RContainer__Item1" onClick={handleHome}>
          Home
        </div>
        <div className="RContainer__Item1" onClick={handleCollection}>
          Collection
        </div>
        <div className="RContainer__Item1" onClick={handleAuth}>
          Login
        </div>
        <div className="RContainer__Item4" onClick={handleAuth}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Header;
