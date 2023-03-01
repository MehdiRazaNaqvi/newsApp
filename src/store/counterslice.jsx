import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api_url } from '../config/api'





const initialState = {



  currentUser: {

  },


  articles: [],

  users: [],

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

      state.articles = [...action.payload.data].reverse()
      // const reversed = [...state.articles].reverse()
      action.payload.cb()



    },


    setAuthors: (state, action) => {

      state.users = action.payload.data
      action.payload.cb()

    },



  },


})







export const { userLogin, logout, setArticles, setAuthors } = counterSlice.actions

export default counterSlice.reducer