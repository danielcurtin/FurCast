import React from "react";
import './BadPath.css';

const BadPath = ({ history, resetCity }) => {
  return (
    <section className='bad-path'>
      <h1 className='bad-path-text'>Oops! Something went wrong.</h1>
      <button className='bad-path-button' onClick={() => {
          history.push('/');
          resetCity();
        }}>Home</button>
    </section>
  );
};

export default BadPath;