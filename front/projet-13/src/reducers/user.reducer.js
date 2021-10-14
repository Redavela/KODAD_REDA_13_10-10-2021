import {LOGIN, LOGOUT} from "../actions/user.action";

const initialState = {}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            console.log(state, action.payload);
            return {...state, user: action.payload}
        case LOGOUT:
            return state = {}
        default:
            return state
    }
}