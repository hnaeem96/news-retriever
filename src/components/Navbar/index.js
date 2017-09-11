import React, { Component } from 'react';

import './style.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="container nav-container">
            <a href="/">News</a>
            <div className="nav-list">
              <a className="nav-link" href="/saved">Saved</a>
              <a className="nav-link" href="/favorites">Favorites</a>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
