export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = (data) => {
    return (dispatch) => {
        dispatch({
            type:LOGIN,
            payload:data,
        })

    }
}

export const logout = (dispatch) => {
    return dispatch({type: LOGOUT})
}
