import React from "react";
import './Error.css';

type ErrorTypes = {
  attempt: string
};

const Error = ({ attempt }: ErrorTypes) => {
  if (!attempt) return <h1 className="error-text">Please enter a U.S. City or Zip Code.</h1>;

  return <h1 className="error-text">Couldn't find "<span className="error-input">{attempt}</span>", please try again.</h1>;
};

export default Error;