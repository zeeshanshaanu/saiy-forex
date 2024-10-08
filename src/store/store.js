import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice/auth.js";
import authProfile from "./ProfileSetting/profile.js";
import investors from "./Investors/Investor.js";


const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: authProfile,
        Investors: investors,
    },
});

export default store;