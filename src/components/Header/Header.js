import React from "react";
import './Header.css';

import textLogo from '../../assets/furcast-text.png';
import iconLogo from '../../assets/furcast-logo.png';

const Header = ({ page }) => {
  if (page === 'home') {
    return (
      <img className="home-logo" src={textLogo} alt="Cartoon style blue cloud with a white pawprint on top of it, with a yellow sun peeking over the right side of the cloud. Underneath the cloud is the app name FurCast"></img>
    );
  } else {
    return (
      <header className="city-header">
        <div className="city-header-items">
          <img src={iconLogo} alt='Cartoon style blue cloud with a white pawprint on top of it, with a yellow sun peeking over the right side of the cloud.'></img>
          <h1 className="current-city">Weather for <span>{page}</span></h1>
        </div>
      </header>
    );
  }
};

export default Header;