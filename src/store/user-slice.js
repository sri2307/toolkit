import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        getUser(state, action) {
            state.users = action.payload;
        }
    }

})

export const userActions = userSlice.actions;

export default userSlice;