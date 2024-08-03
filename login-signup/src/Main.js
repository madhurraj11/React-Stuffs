import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import './Main.css';

const Main = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="main-container">
      <div className="form-container">
        {isLogin ? <Login onToggle={toggleForm} /> : <SignUp onToggle={toggleForm} />}
      </div>
    </div>
  );
};

export default Main;