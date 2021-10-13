import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../actions/user.action';


const Navigation = () => {
  const isConnected = useSelector (state => state.userReducer);
  console.log ('navigation isConnected.username : ', isConnected.userName);
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout)
  }
  return (
    <div>
      {isConnected.userName !== undefined
        ? <nav className="main-nav">
            <NavLink className="main-nav-logo" exact href="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
              <NavLink className="main-nav-item" href="/user">
                <i className="fa fa-user-circle" />
                Tony
              </NavLink>
              <NavLink className="main-nav-item" href="/" onClick={logOut}>
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
