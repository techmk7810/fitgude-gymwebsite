import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    uName: '',
    uPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8080/clientapi/signin?uName=${formData.uName}&uPassword=${formData.uPassword}`
      )
      .then((response) => {
        const responseData = response.data;
        console.log('Response Data:', responseData);

        const match = responseData.match(/Client ID: (\d+)/);
        if (match) {
          const clientId = match[1];
          localStorage.setItem('clientId', clientId);
          localStorage.setItem('username', formData.uName);
          window.alert('Login successful');
          navigate('/');
        } else {
          window.alert('Login failed: Invalid response format');
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        window.alert('Login failed');
      });
  };

  return (
    <div className="signin-wrapper"> {/* Added wrapper for centering */}
      <div className="signin-container">
        <h1 className="signin-title">Sign In</h1>
        <p className="signin-description">Sign in to your Account</p>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="signin-form-group">
            <label htmlFor="uName" className="signin-label">Username</label>
            <input
              type="text"
              id="uName"
              name="uName"
              placeholder="Enter Your Username"
              value={formData.uName}
              onChange={handleChange}
              className="signin-input"
              required
            />
          </div>
          <div className="signin-form-group">
            <label htmlFor="uPassword" className="signin-label">Password</label>
            <input
              type="password"
              id="uPassword"
              name="uPassword"
              placeholder="Enter Your Password"
              value={formData.uPassword}
              onChange={handleChange}
              className="signin-input"
              required
            />
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
        <p className="signin-footer">
        Don't have an account? <a href="/signup" className="signin-link">Register Here</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
