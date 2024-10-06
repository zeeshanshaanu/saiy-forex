import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
};

// Login user
export const loginUser = createAsyncThunk(
    "/auth/login",
    async (formData) => {
        console.log(formData);
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
            "http://localhost:5000/api/auth/logout",
            {},
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            });
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;