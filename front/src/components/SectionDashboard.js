import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileUser } from '../providers/userProvider';
import { toast } from 'react-toastify';
import { update } from '../slices/userSlice';

const SectionDashboard = ()=> {
  const token = useSelector((state)=> state.user.token)
  const profileUser = useSelector((state)=> state.user.info)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const dispatch = useDispatch()
  useEffect(()=>{
      setFirstName(profileUser.firstName)
      setLastName(profileUser.lastName)
  },[profileUser])

  const handleUpdateUser = async () => {
    if (firstName.length > 2 && lastName.length > 2) {
      const result = await updateProfileUser(token,firstName,lastName)
      dispatch(update(result.body))
      toast.success('Le changement à bien été pris en compte')
    } else {
      toast.warning('Chaque champ doit comporter au moins 3 lettres...')
    }
  }
  
  const handleCancel = () =>{
    setLastName('') 
    setFirstName('')
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{firstName} {lastName}</h1>
        <input type='text' className='input-user' placeholder={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        <input type='text' className='input-user' placeholder={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <div className='section-button'>
        <button className="save edit-button" onClick={handleUpdateUser}>Save</button>
        <button className="cancel edit-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2><section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section><section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section><section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default SectionDashboard;
