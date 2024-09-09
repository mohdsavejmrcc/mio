import React, { useState } from 'react';
import './Login.css'; // Ensure this CSS file is included
import OTPDialog from './Getotp';
const LoginBox = () => {
    const [countryCode, setCountryCode] = useState('+91'); // Default to +91 for India
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showLoginDialog, setShowLoginDialog] = useState(true); // Start with dialog shown
    const [showOtpDialog,setShowOtpDialog] = useState(false)
    if(!showLoginDialog){
        return null
    }
    const handleGetOTP = () => {
        setShowOtpDialog(true)
    };

    const handleCloseOtpDialog = ()=>{
        setShowOtpDialog(false)
    }
    const handleAdminLogin = () => {
        // Logic to switch to admin login page
        console.log('Admin login clicked');
    };

    const handleClose = () => {
        setShowLoginDialog(false);
    };

    
    return (
        <div className="login-dialog">
            <div className="dialog-content">
                <button className="close-button" onClick={handleClose}>X</button>
                <img src="assets/mrcc-logo-without-tagline-larg-1@2x.jpg" alt="Company Logo" className="dialog-logo" />
                <h2>Log In</h2>
                <div className="login-form">
                    <select 
                        className="country-code" 
                        value={countryCode} 
                        onChange={(e) => setCountryCode(e.target.value)}
                    >
                        <option value="+91">+91</option>
                        <option value="+1">+1</option>
                        {/* Add more country codes as needed */}
                    </select>
                    <input 
                        type="text" 
                        placeholder="Enter phone number" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button className="get-otp-button" onClick={handleGetOTP}>Get OTP</button>
                </div>
                <div className="admin-link" onClick={handleAdminLogin}>Log in as Admin</div>
            </div>
            {showOtpDialog && <OTPDialog closeDialog={handleCloseOtpDialog}/>}
        </div>
    );
};

export default LoginBox;
