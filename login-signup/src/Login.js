import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onToggle }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic
    console.log('Login form submitted:', formValues);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="auth-button">Login</button>
      <p className="toggle-text">
        Don't have an account? <span onClick={onToggle}>Sign Up</span>
      </p>
    </form>
  );
};

export default Login;