// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import { Provider } from './Components/ui/provider'; 
import TailorHome from './Pages/TailorHome';
import TailorReportsPage from './Pages/TailorReportsPage';
import CustomerHomePage from './Pages/CustomerHomePage';

const App: React.FC = () => {
    return (
        <Provider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/thome" element={<TailorHome />} />
                    <Route path="/treports" element={<TailorReportsPage/>} />
                    <Route path="/custhome" element={<CustomerHomePage/>} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
