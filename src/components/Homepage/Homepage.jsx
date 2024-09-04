import React, { useState } from 'react';
import LoginBox from '../Login/Login'; // Import the LoginBox component
import './HomePage.css'; // Make sure to include your CSS file

const HomePage = () => {
    const [showLoginDialog, setShowLoginDialog] = useState(false);

    const handleStartClick = () => {
        setShowLoginDialog(true); // Show login dialog when Start Now is clicked
    };

    const handleCloseDialog = () => {
        setShowLoginDialog(false); // Close the login dialog
    };

    return (
        <div className="home-page">
            {/* Other content of your home page */}
            <img
                src="assets/mrcc-logo-without-tagline-larg-1@2x.jpg"
                alt="MRCC Logo"
                className="Mrcc-logo"
            />
            <div className="mid">
                <img
                    src=""
                    srcSet="assets/group-3895@2x.png 2x, assets/group-3895@3x.png 3x"
                    alt="Group 3895"
                    className="Group-3895"
                />
                <div className="Hi-I-am-Mio-Your-AI-powered-Learning-Companion">
                    <span className="text-style-1">Hi, I am Mio.</span> Your{" "}
                    <span className="text-style-2">AI-powered</span> Learning Companion
                </div>
            </div>

            <div className="Rectangle-2474" onClick={handleStartClick}>
                Start Now
            </div>

            {/* Conditional rendering of the LoginBox */}
            {showLoginDialog && <LoginBox onClose={handleCloseDialog} />}
        </div>
    );
};

export default HomePage;
