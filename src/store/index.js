import { createSlice,configureStore } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        getUser(state, action) {
        //console.log(action.payload);
           state.users=action.payload;
           //console.log(state.users)

        }
    }

})

export const userAction = userSlice.actions;

const store = configureStore({
    reducer:{
        user:userSlice.reducer,
    }
})



export default store;