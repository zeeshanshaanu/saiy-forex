import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice/auth.js";
import authProfile from "./ProfileSetting/profile.js";


const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: authProfile,
    },
});

export default store;