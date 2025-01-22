import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import LoginPage from './pages/LoginPage';
import StudentsPage from './pages/StudentsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LoginPage />} />
          <Route path="students" element={<StudentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);