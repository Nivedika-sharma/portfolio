import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { StarBackGround } from './components/StarBackGround.jsx';
import { ThemeToggle } from './components/ThemeToggle.jsx';

const App = () => {
  return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackGround />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <Home/>
       
      </main>

      {/* Footer */}
      
    </div>

  );
};

export default App;
