import React from 'react';
import logo from '../assets/img/argentBankLogo.png'
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (

    //     <nav class="main-nav">
    //   <a class="main-nav-logo" href="./index.html">
    //     <img
    //       class="main-nav-logo-image"
    //       src="./img/argentBankLogo.png"
    //       alt="Argent Bank Logo"
    //     />
    //     <h1 class="sr-only">Argent Bank</h1>
    //   </a>
    //   <div>
    //     <a class="main-nav-item" href="./user.html">
    //       <i class="fa fa-user-circle"></i>
    //       Tony
    //     </a>
    //     <a class="main-nav-item" href="./index.html">
    //       <i class="fa fa-sign-out"></i>
    //       Sign Out
    //     </a>
    //   </div>
    // </nav>
        
        <nav className="main-nav">
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
        </nav>
        
    );
};

export default Navigation;