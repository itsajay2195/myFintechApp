// this is going to be rsponsible for everyting niside the navigation

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading:false,
    userInfo:[],
}

export const userSlice= createSlice({
    name: "user",
    initialState,
    reducers:{
        setLoading:(state,action)=>{
            state.loading = true
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
        },
        
    }
});

export const {setLoading,setUserInfo} = userSlice.actions

// selectors -> they are used to grab info from the state

export const selectUserInfo = state => state.nav.userInfo
export const selectLoading = state => state.nav.loading

export default userSlice.reducer