import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    connected: false,
  },
  reducers: { 
    login: (state) => {
      
      state.connected = true
    }
  },
})

export const { login } = userSlice.actions

export default userSlice.reducer