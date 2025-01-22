import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Add Firebase logout logic
    navigate('/');
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <button onClick={() => navigate('/students')}>Students Page</button>
        <button onClick={handleLogout}>Logout</button>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;