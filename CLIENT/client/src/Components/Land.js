import React from 'react';
import './Land.css';
import Navbar from './Navbar';

function Land() {
  return (
    <div>
      <Navbar />
      <div className="landing-page">     
        <header className="header">
          <h1>River Stone Events</h1>
          <p>Sit back and relax while we create the experience of a lifetime</p>
        </header>
          <footer className="footer">
          <p>© 2024 Driving Test Web. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default Land;
