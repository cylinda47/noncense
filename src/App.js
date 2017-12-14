import React, { Component } from 'react';
import { Link } from 'react-router'; 
import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'; 

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'

// Styles
import './css/reset.css'
import './css/splash.css'
import './css/session.css'
import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/diamonds.css';
import './App.css'


class App extends Component {

  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/diamonds" className="pure-menu-link">Diamonds</Link>
        </li>
        <li className="pure-menu-item">
          <Link to="/NEW" className="pure-menu-link">Create Diamond</Link>
        </li>
        
        <LogoutButtonContainer />
      </span>
    )

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <span>
        <li className="pure-menu-item">
          <Link to="/signup" className="pure-menu-link">Sign Up</Link>
        </li>
        <LoginButtonContainer />
      </span>
    )

    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
          <Link to="/" className="header-logo-link">
            <div className="header-logo-container">  
              <img className="header-logo" src="https://image.flaticon.com/icons/svg/262/262445.svg" />
              Noncense
            </div>
          </Link>
        </nav>

        {this.props.children}
      </div>
    );
  }
}

export default App
