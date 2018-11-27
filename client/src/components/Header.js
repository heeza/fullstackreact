/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return <li><a href="/api/logout">Logout</a></li>
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link 
              to={this.props.auth ? '/serveys' : '/' } 
              className="left brand-logo"
            >
              Emaily
            </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps, null)(Header);