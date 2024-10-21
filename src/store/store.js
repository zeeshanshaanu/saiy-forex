import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth-Slice/auth.js";
import authProfile from "./ProfileSetting/profile.js";
import investors from "./Investors/Investor.js";
import Portfolio from "./Portfolio/Portfolio.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: authProfile,
        Investors: investors,
        Portfolios: Portfolio,
    },
});

export default store;