import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";

type State = {
    name: string | null,
    email: string | null,
    username: string | null
}

const initialState: State = {
    name: null,
    email: null,
    username: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            console.log(action.payload)
            state.email = action.payload.email
            state.username = action.payload.username
            state.name = action.payload.name
        },
        clearCredentials: (state) => {
            state.email = null
            state.username = null
            state.name = null
        }
    }
})

export const {setCredentials, clearCredentials} = authSlice.actions;
export default authSlice.reducer
export const selectAuthState = (state: RootState) => state.auth
