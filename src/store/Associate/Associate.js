import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// ////////////  ********************  //////////////////////////
// ////////////  ********************  //////////////////////////

const initialState = {
    isLoading: false,
    error: null,
};

//   Add-Associate 
export const createAssociate = createAsyncThunk(
    "/Associate/createAssociate",
    async (formData, thunkAPI) => {
        console.log("Create is calling...")
        const token = thunkAPI.getState().auth.token;
        const response = await axios.post(
            'Associate',
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
//   Update-Associate 
export const UpdateAssociate = createAsyncThunk(
    'Associate/UpdateAssociate',
    async ({ AssociateID, formData }, thunkAPI) => {
        console.log("Update is calling with AssociateID...>>>", AssociateID)
        const token = thunkAPI.getState().auth.token;
        const response = await axios.put(
            `Associate/${AssociateID}`,
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


const AssociateSlice = createSlice({
    name: "Associate",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // createAssociate 
            // createAssociate 
            .addCase(createAssociate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createAssociate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(createAssociate.rejected, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
            // UpdateAssociate 
            // UpdateAssociate 
            .addCase(UpdateAssociate.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(UpdateAssociate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(UpdateAssociate.rejected, (state, action) => {
                // console.log(action);
                state.isLoading = false;
                state.isAuthenticated = false;
            })
    },
});
export default AssociateSlice.reducer;