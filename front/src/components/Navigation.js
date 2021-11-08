import React from 'react';
import logo from '../assets/img/argentBankLogo.png';
import {NavLink} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/userSlice';

const Navigation = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleDisconnect =()=>{
    dispatch(logout())
    sessionStorage.removeItem('userToken')
  }
  return (
    <div>
      {user.connected
        ? <nav className="main-nav">
            <NavLink className="main-nav-logo" exact to="/">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className='main-nav-user'>
              <NavLink className="main-nav-item" to="/profile">
                <i className="fa fa-user-circle" />
                <p>{user.info.firstName}</p>
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
            <div className='main-nav-user'>
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
