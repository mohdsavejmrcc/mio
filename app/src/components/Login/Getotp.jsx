import React, { useState } from 'react';
import './Getotp.css'; // Ensure this CSS file is created for styling

const OTPDialog = ({ closeDialog }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [codeSent, setCodeSent] = useState(true); // Assuming code is sent initially

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleVerifyOtp = () => {
        const otpCode = otp.join('');
        if (otpCode === '1234') { // Replace with your actual OTP check
            window.location.href = '/main'; // Redirect to main page
        } else {
            alert('Wrong code. Please try again.');
        }
    };

    return (
        <div className="otp-dialog">
            <div className="otp-dialog-content">
                <button
                    className="otp-close-button"
                    onClick={closeDialog}
                >
                    X
                </button>
                <h2 className="otp-heading">Verify Phone Number</h2>
                <p className="otp-message">Code has been sent to +91******8908</p>
                <div className="otp-input-container">
                    {otp.map((value, index) => (
                        <div key={index} className="otp-input-wrapper">
                            <input
                                type="number"
                                value={value}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                maxLength="1"
                                className="otp-input"
                                
                            />
                        </div>
                    ))}
                </div>
                {!codeSent && <p className="otp-resend-message">Did not get the OTP code?</p>}
                <button
                    className="otp-resend-button"
                    onClick={() => setCodeSent(true)}
                >
                    Resend Code
                </button>
                <button
                    className="otp-verify-button"
                    onClick={handleVerifyOtp}
                >
                    Verify
                </button>
            </div>
        </div>
    );
};

export default OTPDialog;
