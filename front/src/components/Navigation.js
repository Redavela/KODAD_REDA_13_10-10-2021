import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';

const Navigation = () => {
  const userConnected = useSelector((state) => state.user.connected)
  const dispatch = useDispatch()
  const handleDisconnect =()=>{
    dispatch(logout())
    sessionStorage.removeItem('userToken')
  }
  return (
    <div>
      {userConnected
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
                
              </NavLink>
              <NavLink
                className="main-nav-item"
                to="/"
                onClick={handleDisconnect}
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
