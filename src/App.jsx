import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from './pages/Index';
import Forbidden from './pages/403';

import UserLogin from './pages/UsersPage/UserLogin';
import AdminLogin2 from './pages/AdminPages/AdminLogin2';

import UserBoard from './pages/UsersPage';
import DashboardUser from './pages/UsersPage/Dashboard';
import Board from './pages/UsersPage/Boards/Board';

import AdminPage from './pages/AdminPages';
import Dashboard from './pages/AdminPages/Dashboard';
import UsersPage from './pages/AdminPages/UsersPage';
import OrdersPage from './pages/AdminPages/OrdersPage';
import OverallBoard from './pages/AdminPages/Board';
//Boards
import CuttingBoard from './pages/AdminPages/boards/CuttingBoard';

import UserAuth from './auths/UserAuth';
import CheckSession from './auths/CheckSession';
import AdminAuth from './auths/AdminAuth';
import CheckAdminSession from './auths/CheckAdminSession';
//Boards
import PrepBoard from './pages/UsersPage/Boards/PrepBoard';
import FirstAssembly from './pages/UsersPage/Boards/FirstAssembly';
import SecondAssembly from './pages/UsersPage/Boards/SecondAssembly';
import QualityControl from './pages/UsersPage/Boards/QualityControl';
import FinishingOne from './pages/UsersPage/Boards/FinishingOne';
import FinishingTwo from './pages/UsersPage/Boards/FinishingTwo';

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route element={ <CheckAdminSession /> }>
          <Route path='/admin-login'  element={<AdminLogin2 />}/>
        </Route>
        <Route element={ <AdminAuth /> }>
          <Route path='/admin'  element={<AdminPage />}>
            <Route index element={<Dashboard />} />
            <Route path="users-page" element={<UsersPage />}></Route>
            <Route path="product-orders" element={<OrdersPage />}></Route>
            <Route path="product-orders-list" element={<OverallBoard />}></Route>
            {/* //boards */}
            <Route path="department-progress" element={<CuttingBoard />}></Route>
          </Route>
        </Route>
        <Route path="/403" element={<Forbidden />}></Route>



        <Route element={ <UserAuth /> }>
          <Route path="/user-login" element={<UserLogin />}/>
        </Route>
        <Route element={ <CheckSession /> }>
          <Route path='/dashboard'  element={<UserBoard />}>
            <Route index element={<DashboardUser />} />
            {/* Boards */}
            <Route path="cutting" element={<Board />}></Route>
            <Route path="assembly_preparation" element={<PrepBoard />}></Route>
            <Route path="assembly_one" element={<FirstAssembly />}></Route>
            <Route path="assembly_two" element={<SecondAssembly />}></Route>
            <Route path="quality_control" element={<QualityControl />}></Route>
            <Route path="finishing_one" element={<FinishingOne />}></Route>
            <Route path="finishing_two" element={<FinishingTwo />}></Route>
          </Route>
       </Route>
     </Routes>
    </>
  )
}

export default App
