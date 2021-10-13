import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, NavLink} from 'react-router-dom';
import {login} from '../actions/user.action';

const SectionSignIn = () => {
  const [userName, setUserName] = useState ('');
  const [password, setPassword] = useState ('');
  const dispatch = useDispatch ();
  const handleForm = e => {
    e.preventDefault ();
    if (userName && password !== '') {
      let data = {userName, password};
      dispatch(login(data));
     
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content ">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={e => setUserName (e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={e => setPassword (e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SectionSignIn;
