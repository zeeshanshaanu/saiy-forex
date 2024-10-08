import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ////////////  ********************  //////////////////////////
// ////////////  ********************  //////////////////////////

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

//   Add-investor 
export const createInvestor = createAsyncThunk(
    "/auth/createInvestor",
    async (formData, thunkAPI) => {
        // console.log("Create investor data -->>>", formData);
        const token = thunkAPI.getState().auth.token;
        const response = await axios.post(
            'investor',
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


const InvestorsSlice = createSlice({
    name: "Investors",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder

            // createInvestor 
            // createInvestor 
            .addCase(createInvestor.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createInvestor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(createInvestor.rejected, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
    },
});
export default InvestorsSlice.reducer;