import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../screens/Auth-module/LoginScreen';
import ForgotScreen from '../screens/Auth-module/ForgotScreen';

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/forgot" element={<ForgotScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouting;
