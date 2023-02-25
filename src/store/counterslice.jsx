import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api_url } from '../config/api'





const initialState = {



  currentUser: {

  },


  articles: []

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



    setArticles: (state, action) => {

      state.articles = action.payload

    },




  },


})







export const { userLogin, logout, setArticles } = counterSlice.actions

export default counterSlice.reducer