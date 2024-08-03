import React, {useState} from "react";
import './Auth.css';

const SignUp = ({ onToggle }) => {
    const [formValues, setFormValues] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Add sign-up logic
      console.log('Sign up form submitted:', formValues);
    };
  
    return (
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </div>
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
        <button type="submit" className="auth-button">Sign Up</button>
        <p className="toggle-text">
          Already have an account? <span onClick={onToggle}>Login</span>
        </p>
      </form>
    );
  };
  
  export default SignUp;