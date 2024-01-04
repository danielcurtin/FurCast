import React from "react";
import './BadPath.css';

type BadPathProps = {
  history: any,
  resetCity: () => void
};

const BadPath = ({ history, resetCity }: BadPathProps) => {
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