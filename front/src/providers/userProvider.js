const url = 'http://localhost:3001/api/v1/user'


export const logUser = async(email, password) => {

  const settings = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${url}/login`, settings);
  try {
    return await response.json();
  } catch (error) {
    return error;
  }


};

export const findProfileUser = async(token)=>{
  const settings = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };
  const response = await fetch(`${url}/profile`, settings);
  try {
    return await response.json();
  } catch (error) {
    return error;
  }
}

export const updateProfileUser = async(token, firstName, lastName)=>{
  const settings = {
    method: 'PUT',
    body: JSON.stringify({ firstName, lastName }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    
  };
  const response = await fetch(`${url}/profile`, settings);
  try {
    return await response.json();
  } catch (error) {
    return error;
  }
}