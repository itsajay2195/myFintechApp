// this is going to be rsponsible for everyting niside the navigation

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error:false,
    userInfo: null,
    spendingLimit: null,
    amountSpent:null,
    weeklyLimitToggled:null,
    expenseInfo: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
            state.loading = false
        },
        setSpendingLimit: (state, action) => {
            state.spendingLimit = action.payload
        },
        setMenuInfo: (state, action) => {
            state.menuInfo[action.payload.index].isToggled = action.payload.value
        },
        setExpenseInfo: (state, action) => {
            state.expenseInfo = action.payload
            state.loading = false
        },
        setAmountSpent:(state,action)=>{
            state.amountSpent = action.payload
        },
        setWeeklyLimitToggled:(state,action)=>{
            state.weeklyLimitToggled = action.payload
        }
    
    }
});

export const { setLoading, setUserInfo, setSpendingLimit, setMenuInfo, setExpenseInfo,setAmountSpent, setWeeklyLimitToggled } = userSlice.actions

// selectors -> they are used to grab info from the state

export const selectUserInfo = state => state.user.userInfo
export const selectLoading = state => state.user.loading
export const selectSpendingLimit = state => state.user.spendingLimit
export const selectMenuInfo = state => state.user.menuInfo
export const selectExpenseInfo = state => state.user.expenseInfo
export const selectAmountSpent = state => state.user.amountSpent
export const selectWeeklyLimitToggled = state => state.user.weeklyLimitToggled


export default userSlice.reducer