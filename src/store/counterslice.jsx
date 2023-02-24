import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api_url } from '../config/api'





const initialState = {



  currentUser: {

  },



}





export const counterSlice = createSlice({



  name: 'counter',

  initialState,


  reducers: {


    userLogin: (state, action) => {


      state.currentUser = action.payload.user
      state.currentUser.jwt = action.payload.jwt


    },



    logout: (state, action) => {
      state.currentUser = {}
    },







  },


})







export const { userLogin, logout } = counterSlice.actions

export default counterSlice.reducer