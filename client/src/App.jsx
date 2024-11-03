import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard';
import Signin from './Auth/Signin';
import Signup from './Auth/Signup';
import { useAuth } from "./contexts/AuthContext.jsx";

const App = () => {

  const { isAuthenticated } = useAuth();

  return <Router>
    <Routes>
      <Route
        path='/'
        element={
          !isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />
        } />
      <Route
        path='/signin'
        element={
          !isAuthenticated ? <Signin /> : <Navigate to="/dashboard" />
        } />
      <Route
        path='/dashboard'
        element={
          isAuthenticated ? <Dashboard /> : <Signin/>
        } />
    </Routes>
  </Router>
};

export default App;