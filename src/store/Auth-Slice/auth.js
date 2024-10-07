import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
    token: localStorage.getItem('authToken') || null,
    link: ""
};

// Login user
export const loginUser = createAsyncThunk(
    "/auth/login",
    async (formData) => {
        const response = await axios.post(
            "http://localhost:8000/api/user/login",
            formData,
            { withCredentials: true }
        );

        return response.data;
    }
);

//   logout user
export const logoutUser = createAsyncThunk(
    "/auth/logout",

    async () => {
        const response = await axios.post(
            "http://localhost:8000/api/user/logout",
            {},
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

//   forgot-Password user
export const forgotPassword = createAsyncThunk(
    "/auth/forgotPassword",
    async (formData) => {
        const response = await axios.post(
            "http://localhost:8000/api/user/forgot-password",
            formData,
            { withCredentials: true }
        );

        return response.data;
    }
);
//   resetPassword-Password 
export const resetPassword = createAsyncThunk(
    "/auth/resetPassword",
    async ({ formData, id, token }) => {
        const response = await axios.post(
            `http://localhost:8000/api/user/reset-password/${id}/${token}`,
            formData,
            { withCredentials: true }
        );
        return response.data;
    }
);



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => { },
        authToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        }

    },
    extraReducers: (builder) => {
        builder
            // login user
            // login user
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
                state.user = action.payload.user;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            // forgotPassword
            // forgotPassword
            .addCase(forgotPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.link = action?.payload?.link;
                state.isAuthenticated = false;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            // resetPassword 
            // resetPassword 
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            // logout
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { setUser, authToken, logout } = authSlice.actions;
export default authSlice.reducer;