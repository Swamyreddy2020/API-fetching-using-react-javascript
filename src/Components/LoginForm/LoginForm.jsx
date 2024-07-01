import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/target'); 
    };

    const handleForgotPassword = () => {
        // Logic for handling forgotten password
        console.log('Forgot password clicked');
    };

    const handleRegister = () => {
        // Logic for handling registration
        console.log('Register clicked');
    };

    return (
        <div className='wrapper'>
            <form action="">
                <h1>LOGIN FORM</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required value={username} 
                    onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required 
                     value={password} 
                     onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <button type="button" onClick={handleForgotPassword} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>
                        Forgot password?
                    </button>
                </div>

                <button type="button" onClick={handleLogin}>LOGIN</button>

                <div className="registration-link">
                    <p>Don't have an account?<button type="button" onClick={handleRegister} style={{ background: 'none', border: 'none', color: 'white', textDecoration: 'underline', cursor: 'pointer' }}>
                        Register
                    </button></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
