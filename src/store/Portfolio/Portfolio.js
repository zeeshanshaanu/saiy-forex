import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ////////////  ********************  //////////////////////////
// ////////////  ********************  //////////////////////////

const initialState = {
    isLoading: false,
    error: null,
};

//   Add-Portfolio 
export const createPortfolio = createAsyncThunk(
    "/portfolio/createPortfolio",
    async (formData, thunkAPI) => {
        console.log("Create is calling...")
        const token = thunkAPI.getState().auth.token;
        const response = await axios.post(
            'portfolio',
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
//   Update-Portfolio 
export const UpdatePortfolio = createAsyncThunk(
    'portfolio/UpdatePortfolio',
    async ({ PortfolioID, formData }, thunkAPI) => {
        console.log("Update is calling with PortfolioID...>>>", PortfolioID)
        const token = thunkAPI.getState().auth.token;
        const response = await axios.put(
            `portfolio/${PortfolioID}`,
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


const PortfolioSlice = createSlice({
    name: "Portfolio",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // createPortfolio 
            // createPortfolio 
            .addCase(createPortfolio.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPortfolio.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(createPortfolio.rejected, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            // UpdatePortfolio 
            // UpdatePortfolio 
            .addCase(UpdatePortfolio.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(UpdatePortfolio.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(UpdatePortfolio.rejected, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
    },
});
export default PortfolioSlice.reducer;