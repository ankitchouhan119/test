import React from "react";
import logo from '../../images/fullnameLogoAuraverse.png'; 
import profile from "../../images/profileLogo.png";
import { useNavigate } from "react-router-dom";
import '../../css/header.css'

const HeaderComponent = () => {
    const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  }

  const handleHomepage =() =>{
    navigate("/");
  }


  return (
      <header className="header-container">
      <div className="header-left">
        <img src={logo} alt="AuraVerse Logo" className="logo cursor-pointer" onClick={handleHomepage} />
      </div>
      <div className="header-right">
        <img src={profile} alt="Profile Logo" className="profileLogo cursor-pointer" onClick={handleProfileClick}></img>
      </div>
    </header>
  );
};

export default HeaderComponent;