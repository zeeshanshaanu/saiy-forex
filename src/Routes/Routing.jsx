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
import MainAssociates from '../screens/Associates/MainAssociates';
import AssociateDetails from '../screens/Associates/AssociateDetails';
import AssociateEarningDetails from '../screens/Associates/AssociateEarningDetails';
import WithDrawals from '../screens/WithDrawals/WithDrawals';
import UserManagement from '../screens/UserManagement/UserManagement';
import UserPermissions from '../screens/UserManagement/UserPermissions';
import ActivityLogs from '../screens/ActivityAndLogs/ActivityLogs';
import Settings from '../screens/Settings/Settings';
import Notifications from '../screens/Notifications/Notifications';

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot" element={<ForgotScreen />} />
        <Route path="/ResetPassword/:id/:token" element={<ResetPassword />} />
        {/* /////////////////////  ********************   //////////////////////////// */}
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          {/*  */}
          <Route path="Portfolios" element={<Portfolios />} />
          <Route path="PortfolioDetails" element={<PortfolioDetails />} />
          {/*  */}
          <Route path="Investors" element={<Investors />} />
          <Route path="InvestorDetail/:id" element={<InvestorDetail />} />
          {/*  */}
          <Route path="MainAssociates" element={<MainAssociates />} />
          <Route path="AssociateDetails" element={<AssociateDetails />} />
          <Route path="AssociateEarningDetails" element={<AssociateEarningDetails />} />
          {/*  */}
          <Route path="WithDrawals" element={<WithDrawals />} />
          {/*  */}
          <Route path="UserManagement" element={<UserManagement />} />
          <Route path="UserPermissions" element={<UserPermissions />} />
          {/*  */}
          <Route path="Notifications" element={<Notifications />} />
          {/*  */}
          <Route path="ActivityLogs" element={<ActivityLogs />} />
          {/*  */}
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
