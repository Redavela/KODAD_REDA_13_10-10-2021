export const logUser = async(email, password) => {
  const url = 'http://localhost:3001/api/v1/user/login';

  const settings = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, settings);
  try {
    return await response.json();
  } catch (error) {
    return error;
  }
};

// check si authentification est ok
// SI oui => set dans le store la clé token (a ajouter dans le state initial userReducer)
// MAJ du state connected dans le reducer
