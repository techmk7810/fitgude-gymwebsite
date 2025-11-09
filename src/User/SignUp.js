import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        clientName: '',
        clientDateOfBirth: '',
        clientAddress: '',
        clientEmail: '',
        clientContactNo: '',
        uName: '',
        uPassword: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (formData.uPassword === formData.confirmPassword) {
                axios.post("http://localhost:8080/clientapi/create", formData)
                    .then(() => {
                        window.alert('Congratulations!!! Your Registration is Successful');
                        setFormData({
                            clientName: '',
                            clientDateOfBirth: '',
                            clientAddress: '',
                            clientEmail: '',
                            clientContactNo: '',
                            uName: '',
                            uPassword: '',
                            confirmPassword: '',
                        });
                    })
                    .catch(error => {
                        window.alert('An error occurred during registration', error);
                    });
                // navigate('/');
            } else {
                window.alert('Passwords do not match');
            }
        } catch (e) {
            window.alert('An error occurred during registration', e);
        }
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <h1 className="register-title">Create Your Account</h1>
                <p className="register-description">Sign up to get Fitness Guidance.</p>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-form-group">
                        <label htmlFor="clientName" className="register-label">Full Name</label>
                        <input
                            type="text"
                            id="clientName"
                            name="clientName"
                            placeholder="Enter your full name"
                            value={formData.clientName}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="clientDateOfBirth" className="register-label">Date Of Birth</label>
                        <input
                            type="date"
                            id="clientDateOfBirth"
                            name="clientDateOfBirth"
                            value={formData.clientDateOfBirth}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="clientAddress" className="register-label">Address</label>
                        <textarea
                            id="clientAddress"
                            name="clientAddress"
                            placeholder="Enter your address"
                            value={formData.clientAddress}
                            onChange={handleChange}
                            className="register-textarea"
                            required
                        ></textarea>
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="clientContactNo" className="register-label">Contact Number</label>
                        <input
                            type="text"
                            id="clientContactNo"
                            name="clientContactNo"
                            placeholder="Enter your contact"
                            value={formData.clientContactNo}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="clientEmail" className="register-label">Email Address</label>
                        <input
                            type="email"
                            id="clientEmail"
                            name="clientEmail"
                            placeholder="Enter your email"
                            value={formData.clientEmail}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="uName" className="register-label">Create Username</label>
                        <input
                            type="text"
                            id="uName"
                            name="uName"
                            placeholder="Enter your Username"
                            value={formData.uName}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="uPassword" className="register-label">Password</label>
                        <input
                            type="password"
                            id="uPassword"
                            name="uPassword"
                            // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}'
                            title='Must contain at least one number, one uppercase, and lowercase letter, and at least 8 characters'
                            placeholder="Enter your password"
                            value={formData.uPassword}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <div className="register-form-group">
                        <label htmlFor="confirmPassword" className="register-label">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="register-input"
                            required
                        />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="register-footer">
                    Already have an account?  
                    <span
                        style={{ color: 'yellow', cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={() => navigate('/login')}>
                        Login Here
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
