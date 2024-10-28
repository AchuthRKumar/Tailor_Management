import React from 'react';

const TopBar: React.FC = () => (
  <header className="top-bar">
    <h1 className="app-name">TAILORNEST</h1>
    <div className="button-container">
      <button className="button">Login</button>
      <button className="button">Register</button>
    </div>
  </header>
);

export default TopBar;
