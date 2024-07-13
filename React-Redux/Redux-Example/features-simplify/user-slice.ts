import {createSlice} from '@reduxjs/toolkit'

import {IUserSlice} from "../interface";

const initialSate: IUserSlice = {
    userList: []
}

export const userSlice = createSlice({
    name: 'collectionDetail',
    initialState: initialSate,
    reducers: {
        setUserList: (state, action) => {
            const payload = !!action && !!action.payload ? action.payload : undefined
            const {users = [], page = 1} = payload || {}
            if (page === 1) {
                state.userList = users
            } else {
                state.userList = [...state.userList, ...users]
            }
        },
    },

})

export const {
    setUserList
} = userSlice.actions

export default userSlice.reducer