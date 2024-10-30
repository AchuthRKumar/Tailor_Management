// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { Provider } from './Components/ui/provider'; 
import TailorHome from './Pages/TailorHome';
import TailorReportsPage from './Pages/TailorReportsPage';
<<<<<<< HEAD
import ShopListPage from './Pages/ShopListPage';
import ShopDetailsPage from './Pages/ShopDetailsPage'; // Import the ShopDetailsPage
=======
import CustomerHomePage from './Pages/CustomerHomePage';
>>>>>>> ad7935ba8be1235279b3b0477581202227e3c0ec

const App: React.FC = () => {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/thome" element={<TailorHome />} />
<<<<<<< HEAD
                    <Route path="/treports" element={<TailorReportsPage />} />
                    <Route path="/shops" element={<ShopListPage />} />
                    <Route path="/shop/:tailorId" element={<ShopDetailsPage />} /> 
=======
                    <Route path="/treports" element={<TailorReportsPage/>} />
                    <Route path="/custhome" element={<CustomerHomePage/>} />
>>>>>>> ad7935ba8be1235279b3b0477581202227e3c0ec
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
