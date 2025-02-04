// App.js
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import SignUp from './pages/SignUp.jsx';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';

function App() {
  return (


    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;