import React from 'react';
import { Link } from 'react-router-dom';
import baseRelativePath from '../path.js';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div>
      <div>
        <h3 style={style}><Link to={`${baseRelativePath}/`}>Home</Link></h3>
        <h3 style={style}><Link to={`${baseRelativePath}/jokes`}>Jokes</Link></h3>
      </div>
      {children}
    </div>
  );
};

export default Header;
