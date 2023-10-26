import { createSlice } from '@reduxjs/toolkit';
import { LoginType, logIn } from './operations';

const initialState = {} as LoginType

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(logIn.pending, state => {
                state.status = "loading"
                state.error = null
            })
            .addCase(logIn.fulfilled, state => {
                state.status = "succeeded"
            })
            .addCase(logIn.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
    }
})

export default authSlice.reducer