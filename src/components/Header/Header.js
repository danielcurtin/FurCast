import React from "react";
import './Header.css';
import textLogo from '../../assets/furcast-text.png';

const Header = () => {
  return (
    <img className="home-logo" src={textLogo} alt="Cartoon style blue cloud with a white pawprint on top of it, with a yellow sun peeking over the right side of the cloud. Underneath the cloud is the app name FurCast"></img>
  );
};

export default Header;