import React from "react";
import './Error.css';

const Error = ({ attempt }) => {
  return (
    <h1 className="error-text">Couldn't find "<span className="error-input">{attempt}</span>", please try again.</h1>
  );
};

export default Error;