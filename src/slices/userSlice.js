// this is going to be rsponsible for everyting niside the navigation

import { createSlice } from "@reduxjs/toolkit";
import { icons } from '../constants'

const initialState = {
    loading: false,
    userInfo: [],
    spendingLimit: null, // this state is locally maintained, just for the assignment puropse. The implemntation will be different in real world use case
    menuInfo: [
        { id: 1, image: icons.insight, title: 'Top-up-account', meta: 'Deposit money to your account to use with card', toggle: false },
        { id: 2, image: icons.transfer, title: 'Weekly spending limit', meta: "you haven't set any spending limit on card", toggle: true, isToggled: false },
        { id: 3, image: icons.freeze, title: 'Freeze card', meta: 'Your Debit card is currently active', toggle: null },
        { id: 4, image: icons.newCard, title: 'Get a new card ', meta: 'This activates your current debit card', toggle: false },
        { id: 5, image: icons.deactivate, title: 'Deactivated cards', meta: 'This deactivates your current debit card', toggle: false },
    ], // just using the hardcoded value for the assignement and convenience purpose considering the time constraints. 
    expenseInfo: []
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
        setSpendingLimit: (state, action) => {
            state.spendingLimit = action.payload
        },
        setMenuInfo: (state, action) => {
            state.menuInfo[action.payload.index].isToggled = action.payload.value
        },
        setExpenseInfo: (state, action) => {
            state.expenseInfo = action.payload
            state.loading = false
        }

    }
});

export const { setLoading, setUserInfo, setSpendingLimit, setMenuInfo, setExpenseInfo } = userSlice.actions

// selectors -> they are used to grab info from the state

export const selectUserInfo = state => state.user.userInfo
export const selectLoading = state => state.user.loading
export const selectSpendingLimit = state => state.user.spendingLimit
export const selectMenuInfo = state => state.user.menuInfo
export const selectExpenseInfo = state => state.user.expenseInfo

export default userSlice.reducer