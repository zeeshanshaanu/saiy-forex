import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

//   ChangePassword 
export const changePassword = createAsyncThunk(
    "/auth/ChangePassword",
    async (formData, thunkAPI) => {
        // console.log(formData);
        const token = thunkAPI.getState().auth.token;
        console.log(token);
        const response = await axios.post(
            `user/changepassword`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }, withCredentials: true
            }
        );
        return response.data;
    }
);
//   updateProfile 
export const updateProfile = createAsyncThunk(
    "/auth/updateProfile",
    async (formData, thunkAPI) => {
        console.log("Thunk Update data -->>>", formData);
        const token = thunkAPI.getState().auth.token;
        const response = await axios.put(
            `user/update-user-profile`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }, withCredentials: true
            }
        );
        return response.data;
    }
);

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setUser: (state, action) => { },
    },
    extraReducers: (builder) => {
        builder
            // changePassword 
            // changePassword 
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(changePassword.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            // updateProfile 
            // updateProfile 
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
    },
});
export default profileSlice.reducer;
