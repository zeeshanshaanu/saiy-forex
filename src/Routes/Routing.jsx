import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from '../screens/Auth-module/LoginScreen';
import ForgotScreen from '../screens/Auth-module/ForgotScreen';
import ResetPassword from '../screens/Auth-module/ResetPassword';
import Dashboard from '../screens/Dashboard/Dashboard';
import Layout from '../components/Layout/Layout';
import Portfolios from '../screens/Portfolios/Portfolios';
import PortfolioDetails from '../screens/Portfolios/PortfolioDetails';
import Investors from '../screens/Investors/Investors';
import InvestorDetail from '../screens/Investors/InvestorDetail';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot" element={<ForgotScreen />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        {/* //////////////******************** */}
         <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          {/*  */}
          <Route path="Portfolios" element={<Portfolios />} />
          <Route path="PortfolioDetails" element={<PortfolioDetails />} />
          {/*  */}
          <Route path="Investors" element={<Investors />} />
          <Route path="InvestorDetail" element={<InvestorDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
