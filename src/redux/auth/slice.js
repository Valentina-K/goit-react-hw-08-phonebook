import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isRefreshing: false,
        isLoggedIn: false,
        error: null,
        registerErr: null,
        loginErr:null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.loginErr = null;
            })
            .addCase(logIn.pending, (state) => {
                state.isLoggedIn = false;
                state.loginErr = null;
            })
            .addCase(logIn.rejected, (state, action) => {
                state.loginErr = action.payload;
                state.isLoggedIn = false;
            })
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
                state.error = null;
                state.registerErr = null;
                state.loginErr = null;
             })
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.registerErr = null;
            }) 
            .addCase(register.pending, (state) => {
                state.isLoggedIn = false;
                state.registerErr = null;
            })
            .addCase(register.rejected, (state, action) => {
                state.registerErr = action.payload;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
                state.error = null;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.error = null;
            })
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            })            
            .addDefaultCase(state => state)
        
    }
})

export const authReducer = authSlice.reducer;