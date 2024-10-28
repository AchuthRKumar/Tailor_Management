// src/LandingPage.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import TopBar from '../Components/TopBar';
import SearchBar from '../Components/SearchBar';
import Footer from '../Components/Footer';

const LandingPage: React.FC = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate(); // Use useNavigate for navigation

    useEffect(() => {
        let isMounted = true;
        const targetCount = 1000;
        const duration = 300; 
        const intervalTime = 1; 

        const totalSteps = duration / intervalTime;
        const increment = Math.ceil(targetCount / totalSteps);
        let currentCount = 0;

        const interval = setInterval(() => {
            if (isMounted && currentCount < targetCount) {
                currentCount += increment;
                if (currentCount > targetCount) {
                    currentCount = targetCount;
                }
                setCount(currentCount);
            } else {
                clearInterval(interval);
            }
        }, intervalTime);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    // Handle login button click
    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    return (
        <div className='landing-page'>
            <div className='background-image'></div>
            <TopBar />
            <div className='welcome-box'>
                <h2>Welcome to TailorNest!</h2>
                <p>Where every stitch has a story!</p>
                <h1>{count}+ Registered Tailors</h1>
                <button onClick={handleLoginClick}>Login</button> {/* Add the login button */}
            </div>

            <SearchBar />

            <div className='info-boxes'>
                <div className='info-box'>
                    <h3>About Us</h3>
                    <p>Learn more about our mission and values.</p>
                </div>
                <div className='info-box'>
                    <h3>What We Do</h3>
                    <p>Discover the services we offer to our customers.</p>
                </div>
                <div className='info-box'>
                    <h3>Our Story</h3>
                    <p>Read about our journey and how we started.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LandingPage;
