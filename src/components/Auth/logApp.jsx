import React, { useState } from "react";
//import logo from './logo.svg';
import logGymImage from '../../assets/logGym.jpg'; // Import the image from the assets folder
import './log.module.App.css'; // Your custom CSS
import { Login } from "./Login";
import { Register } from "./Register";

function LogApp() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  // Conditionally applying background image only on login/register page
  const formContainerStyle = currentForm === 'login' || currentForm === 'register' ? {
    backgroundImage: `url(${logGymImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Ensure the background covers the full height
  } : {};

  return (
    <div className="logApp" style={formContainerStyle}>
      <div className="auth-form-container" >
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default LogApp;
