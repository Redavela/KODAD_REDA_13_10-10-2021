import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    connected: false,
    token: null,
    info: {},
  },
  reducers: { 
    login: (state, data) => {
      state.connected = true
      state.token = data.payload.token
      state.info = data.payload.info
    },
    logout: state => {
      state.connected = false
      state.token = null
      state.info = {}
    }
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer