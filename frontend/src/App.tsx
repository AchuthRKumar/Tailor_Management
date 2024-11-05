// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPageUser from './Pages/RegisterPageUser';
import RegistrationPageTailor from './Pages/RegistrationPageTailor';
import { Provider } from './Components/ui/provider'; 
import TailorHome from './Pages/TailorHome';
import TailorReportsPage from './Pages/TailorReportsPage';
import DressList from './Components/DressList'; 
import ShopListPage from './Pages/ShopListPage';
import ShopDetailsPage from './Pages/ShopDetailsPage'; 
import CustomerHomePage from './Pages/CustomerHomePage';
import AdminHomePage from './Pages/AdminHomePage';

const App: React.FC = () => {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/registerUser" element={<RegisterPageUser />} />
                    <Route path="/registerTailor" element={<RegistrationPageTailor />} />
                    <Route path="/tailorhome" element={<TailorHome />} />
                    <Route path="/shops/:dress" element={<ShopListPage />} />
                    <Route path="/shop/:dress/:tailorId" element={<ShopDetailsPage />} />
                    <Route path="/dresslist" element={<DressList />} /> 
                    <Route path="/customerhome" element={<CustomerHomePage />} />
                    <Route path="/adminhome" element={<AdminHomePage />} />
                    {/* <Route path="/treports" element={<TailorReportsPage />} /> */}
                    {/* <Route path="/order-options" element={<OrderOptionsPage />} /> */}
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
