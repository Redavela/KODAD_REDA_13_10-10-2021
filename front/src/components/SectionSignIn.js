import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../slices/userSlice'
import { logUser } from '../providers/userProvider';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
const SectionSignIn = (props) => {
  const userConnected = useSelector((state) => state.user.connected)
  let history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    setError('')
  },[email,password])
  
 
  if(userConnected){
    return <Redirect to='/'/>
  }
  const handleForm = async e => {
    
    e.preventDefault();
    if (email && password) {
      const responseLogUser = await logUser(email, password)
      console.log(responseLogUser);
      if(responseLogUser.status!== 200){
        setError(`L'utilisateur ${email} n'éxiste pas`)
      }else{
        const token = responseLogUser.body.token
        dispatch(login(token))
        sessionStorage.setItem('userToken', token)
        history.push("/user");
      }
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
            <label htmlFor="email">email</label>
            <input
              style={{backgroundColor: error ? 'red' : ''}}
              type="text"
              id="email"
              onChange={e => setEmail (e.target.value)}
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
