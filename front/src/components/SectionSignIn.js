import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { login} from '../slices/userSlice'
import { logUser } from '../providers/userProvider';

const SectionSignIn = (props) => {
  const [userName, setUserName] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState ('');
  const dispatch = useDispatch()


  const handleForm = async e => {

    e.preventDefault ();
    if (userName && password) {
    //  dispatch(login())
    logUser(userName, password)
    }
    else{
      setError('Champs vide')
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content ">
        <i className="fa fa-user-circle sign-in-icon" />
        <h1>Sign In</h1>
        <form >
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
          <button className="sign-in-button" onClick={(handleForm)}>Sign In</button>
          {error && <div>{error}</div>}
        </form>
      </section>
    </main>
  );
};

export default SectionSignIn;
