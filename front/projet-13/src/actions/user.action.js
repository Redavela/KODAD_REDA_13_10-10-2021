export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = data => {
  return dispatch => {
    fetch (
      'https://petstore.swagger.io/v2/user/login?username=' +
        data.userName +
        '&password=' +
        data.password,
      {method: 'GET'}
    )
      .then (response => {
          console.log(response)
        // if (response.status === 200) {
        //   dispatch ({
        //     type: LOGIN,
        //     payload: data,
        //   });
        //   return response;
        // }
      })
      .catch (error => {
        return error;
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch ({
      type: LOGOUT,
    });
    return true;
  };
};
