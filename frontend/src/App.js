import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EmployeesList from './pages/EmployeesList';
import EmployeeForm from './pages/EmployeeForm';
import EmployeeDetails from './pages/EmployeeDetails';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

    
        <Route path="/employees" element={<ProtectedRoute><EmployeesList /></ProtectedRoute>} />
        <Route path="/add-employee" element={<ProtectedRoute><EmployeeForm /></ProtectedRoute>} />
        <Route path="/edit-employee/:eid" element={<ProtectedRoute><EmployeeForm /></ProtectedRoute>} />
        <Route path="/employee/:eid" element={<ProtectedRoute><EmployeeDetails /></ProtectedRoute>} />

    
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;