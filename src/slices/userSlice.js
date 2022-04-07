// this is going to be rsponsible for everyting niside the navigation

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    userInfo: [],
    spendingLimit:'5,000'
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = true
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
        },
        setSpendingLimit :(state, action) =>{
            state.spendingLimit = action.payload
           
        }

    }
});

export const { setLoading, setUserInfo ,setSpendingLimit} = userSlice.actions

// selectors -> they are used to grab info from the state

export const selectUserInfo = state => state.user.userInfo
export const selectLoading = state => state.user.loading
export const selectSpendingLimit = state => state.user.spendingLimit

export default userSlice.reducer