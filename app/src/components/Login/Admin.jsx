import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Admin.css'; // Create and include this CSS file

const AdminLoginDialog = ({ showAdminDialog, closeAdminDialog }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    if (!showAdminDialog) {
        return null; // Don't render the dialog if showAdminDialog is false
    }

    const handleLogin = () => {
        if (username === '1234' && password === '1234') {
            navigate('/admin-dashboard'); // Redirect to admin dashboard
        } else {
            alert('Invalid credentials'); // Show alert for invalid login
        }
    };

    return (
        <div className="admin-login-dialog">
            <div className="dialog-content">
                <button className="close-button" onClick={closeAdminDialog}>X</button>
                <h2>Admin Login</h2>
                <div className="login-form">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginDialog;
