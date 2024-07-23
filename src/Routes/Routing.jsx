import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../screens/Auth-module/LoginScreen';
import ForgotScreen from '../screens/Auth-module/ForgotScreen';
import ResetPassword from '../screens/Auth-module/ResetPassword';
import Dashboard from '../screens/Dashboard/Dashboard';
import Layout from '../components/Layout/Layout';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot" element={<ForgotScreen />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
