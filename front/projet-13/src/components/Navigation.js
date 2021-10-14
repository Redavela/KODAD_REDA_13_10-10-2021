import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../actions/user.action';

const Navigation = items => {
  const dispatch = useDispatch();
  const logOut = e => {
    e.preventDefault ();
    let logoutDispatch = dispatch(logout());
    if (logoutDispatch) {
      console.log ('déconnexion : ', items.isConnected.user.userName);
      items.props.history.push ({
        pathname: '/signin',
      });
    }
  };
  return (
    <div>
      {items.isConnected.user !== undefined
        ? <nav className="main-nav">
            <NavLink className="main-nav-logo" exact to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
              <NavLink className="main-nav-item" to="/user">
                <i className="fa fa-user-circle" />
                {items.isConnected.user.userName}
              </NavLink>
              <NavLink
                className="main-nav-item"
                to="/"
                onClick={e => logOut (e)}
              >
                <i className="fa fa-sign-out" />
                Sign Out
              </NavLink>
            </div>
          </nav>
        : <nav className="main-nav">
            <NavLink className="main-nav-logo" exact to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
              <NavLink className="main-nav-item" exact to="/signin">
                <i className="fa fa-user-circle" />
                Sign In
              </NavLink>
            </div>
          </nav>}
    </div>
  );
};

export default Navigation;
