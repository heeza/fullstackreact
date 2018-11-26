/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">
              Emaily
            </a>
            <ul className="right">
              <li><a href="sass.html">Login with Google</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header;